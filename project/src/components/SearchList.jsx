import { useEffect } from "react"
import { useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { SpinnerDiamond } from "spinners-react"
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
                                <SingleJob job={job}/>
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