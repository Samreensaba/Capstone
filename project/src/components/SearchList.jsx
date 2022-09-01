import { useEffect } from "react"
import { useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { SpinnerDiamond } from "spinners-react"

const SearchList = ({ query, heading, description, image }) => {

    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchList(query)
    }, [])

    const fetchList = async (query) => {
        try {
            const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${query}`)
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                const jobsdata = data.data.slice(0, 20)
                setList(jobsdata)
                setIsLoading(false)
            }
            else {
                console.log("Error fetching data")
                setIsLoading(false)
            }
        }
        catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }
    return (
        <>
            <div className="jumbotron d-flex hero">
                <div className="mr-2">
                    <h1 className="display-4 font-weight-bold">{heading}</h1>
                    <hr className="my-5" />
                    <p style={{ color: "inherit", fontWeight: "bold" }}>{description}</p>
                </div>
                <div style={{ width: "130rem" }}>
                    <img className="hero-img" src={image} alt="Hero Image" />
                </div>
            </div>
            <Container className="body">
                <Row className="justify-content-center">
                    <Col xs={12} md={8} className="pt-3 ">
                        <Link to="/AllJobs"><Button className="mr-5 button">All Jobs</Button></Link> <Link to="/"><Button className="button ml-5">Home</Button></Link>
                        {isLoading && (
                            <SpinnerDiamond size={90} thickness={180} speed={88} color="rgba(57, 90, 172, 1)" secondaryColor="rgba(165, 57, 172, 0.44)" />
                        )}
                        {list &&
                            list.map(job => (
                                <Card className="job-card mb-1" key={job._id}>
                                    <Card.Body>
                                    <Card.Title>{job.title} - {job.company_name}</Card.Title>
                                    <Card.Text>
                                        <div className="d-flex justify-content-around mt-3 mb-3">
                                            <div className="text-center">
                                                <div className="text-black-50">Salary</div>
                                                <div>{job.salary}</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-black-50">Location</div>
                                                <div>{job.candidate_required_location}</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-black-50">Category</div>
                                                <div>{job.category}</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-black-50">Type</div>
                                                <div>{job.job_type}</div>
                                            </div>
                                        </div>
                                    </Card.Text>
                                    <Link to={`/jobDetails/${job._id}`}><Button className="cardBttn button">Know More</Button></Link>
                                </Card.Body>
                                </Card>
                            ))
                        }
                        <Link to="/AllJobs"><Button className="mr-5 mb-3 mt-2 button">All Jobs</Button></Link> <Link to="/"><Button className="button ml-5 mb-3 mt-2">Home</Button></Link>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
export default SearchList