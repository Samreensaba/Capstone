import { useEffect } from "react"
import { useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Hero from "./Hero"
import Hero2 from "./Hero2"

const SearchList = ({ query, heading, description, image}) => {

    const [list, setList] = useState([])

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
            }
            else {
                console.log("Error fetching data")
            }
        }
        catch (error) {
            console.log(error)
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
            <div style={{width: "130rem"}}>
                <img className="hero-img" src={image} alt="Hero Image" />
            </div>
        </div>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <Link to="/AllJobs"><Button className="mr-5">All Jobs</Button></Link> <Link to="/"><Button className="ml-5">Home</Button></Link>
                        {list &&
                            list.map(job => (
                                <Card className="job-card mb-1" key={job._id}>
                                    <Card.Body>
                                        <Card.Title>Title: {job.title}</Card.Title>
                                        <Card.Text>
                                            <b>Company:</b> {job.company_name}
                                        </Card.Text>
                                        <Button variant="success">Know More</Button>
                                    </Card.Body>
                                </Card>
                            ))
                        }
                        <Link to="/AllJobs"><Button className="mr-5 mb-3 mt-2">All Jobs</Button></Link> <Link to="/"><Button className="ml-5 mb-3 mt-2">Home</Button></Link>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
export default SearchList