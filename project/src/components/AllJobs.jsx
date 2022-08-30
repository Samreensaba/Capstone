import { useEffect } from "react"
import { useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { SpinnerDiamond } from "spinners-react"

const AllJobs = () => {
    const [jobs, setJobs] = useState([])
    const [query, setQuery] = useState("")
    const [isLoading, setIsLoading] = useState(true)


    const basepoint = 'https://strive-jobs-api.herokuapp.com/jobs'

    useEffect(() => {
        fetchJobs()
    }, [])

    useEffect(() => {
        handleFilter(query)
    }, [query])



    const fetchJobs = async () => {
        try {
            const response = await fetch(basepoint, {
                method: "GET"
            }
            )
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                const jobsdata = data.data.slice(0, 20)
                setJobs(jobsdata)
                setIsLoading(false)
            }
            else {
                console.log("Error fetching data")
                setIsLoading(false)
            }

        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    const handleFilter = (query) => {
        const filteredJobs = jobs.filter((job) => {
            return job.title.toLowerCase().includes(query.toLowerCase())

        })
        setJobs(filteredJobs)
    }
    return (
        <Container className="body">
            <Row className="justify-content-center">
                <Col xs={12} md={10}>
                    <div><Form className="mt-4 mb-2" onSubmit={handleFilter}>
                        <Form.Control
                            type="search"
                            value={query}
                            placeholder="Key Words"
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </Form>
                    </div>
                    {isLoading && (
                        <div className="text-center"><SpinnerDiamond size={50} thickness={180} speed={88} color="rgba(57, 90, 172, 1)" secondaryColor="rgba(165, 57, 172, 0.44)" /></div>
                    )}
                    {jobs &&
                        jobs.map(job => (
                            <Card className="job-card" key={job._id}>
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
                                    <Link to={`/jobDetails/${job._id}`}><Button variant="primary" className="cardBttn">Know More</Button></Link>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </Col>
            </Row>
        </Container>
    )
}
export default AllJobs