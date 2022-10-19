import { useEffect } from "react"
import { useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { SpinnerCircular } from "spinners-react"
import SingleJob from "./SingleJob"

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
            <div className="jumbotron d-flex hero " style={{ borderBottom: '3px solid light grey', boxShadow: "0 2px 4px rgb(0 0 0 / 8%)" }}>
                <Container>
                    <Row>
                        <Col xs={12} lg={8}>
                            <div className="mr-2 pt-5">
                                <h1 className="display-4 font-weight-bold">{heading}</h1>
                                <hr className="my-5" />
                                <p style={{ color: "inherit", fontWeight: "bold" }}>{description}</p>
                            </div>
                        </Col>
                        <Col xs={12} lg={4}>
                            <div>
                                <img className="hero-img" src={image} alt="Hero Image" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="body">
                <Row className="justify-content-center">
                    <Col xs={12} md={8} className="pt-3 ">
                        {/* <Link to="/AllJobs"><Button className="mr-5 button">All Jobs</Button></Link> <Link to="/"><Button className="button ml-5">Home</Button></Link> */}
                        <div className="d-flex justify-content-between">
                            <div>
                                <Link to="/AllJobs"><Button className="mr-5 mb-3 mt-2 button">All Jobs</Button></Link>
                            </div>
                            <div>
                                <Link to="/"><Button className="button ml-5 mb-3 mt-2">Home</Button></Link>
                            </div>
                        </div>
                        {isLoading && (
                            <SpinnerCircular size={50} thickness={180} speed={88} color="rgba(57, 90, 172, 1)" secondaryColor="rgba(165, 57, 172, 0.44)" style={{ marginLeft: "50%" }} />
                        )}
                        {list &&
                            list.map(job => (
                                <SingleJob job={job} />
                            ))
                        }
                        <div className="d-flex justify-content-between">
                            <div>
                                <Link to="/AllJobs"><Button className="mr-5 mb-3 mt-2 button">All Jobs</Button></Link>
                            </div>
                            <div>
                                <Link to="/"><Button className="button ml-5 mb-3 mt-2">Home</Button></Link>
                            </div>
                        </div>

                    </Col>

                </Row>
            </Container>
        </>
    )
}
export default SearchList