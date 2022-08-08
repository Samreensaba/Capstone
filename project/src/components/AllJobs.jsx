import { useEffect } from "react"
import { useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"

const AllJobs = () => {
    const [jobs, setJobs] = useState([])
    const [query, setQuery] = useState("")
    const [isLoading, setIsLoading] = useState(true)


    const basepoint = 'https://strive-jobs-api.herokuapp.com/jobs'

    useEffect(() => {
        fetchJobs()
    }, [])

    useEffect(()=>{
        handleFilter(query)
    },[query])



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
            <Row>
                <Col xs={12} md={8}>
                    <Form className="mt-4 mb-2" onSubmit={handleFilter}>
                        <Form.Control
                            type="search"
                            value={query}
                            placeholder="Key Words"
                            onChange={(e)=>setQuery(e.target.value)}
                        />
                    </Form>
                    {isLoading&& (
            <SpinnerDiamond size={90} thickness={180} speed={88} color="rgba(57, 90, 172, 1)" secondaryColor="rgba(165, 57, 172, 0.44)" />
          )}
                    {jobs && 
                        jobs.map(job => (
                            <Card className="job-card" key={job._id}>
                                <Card.Body>
                                    <Card.Title>Title: {job.title}</Card.Title>
                                    <Card.Text>
                                        <b>Company:</b> {job.company_name}
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
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