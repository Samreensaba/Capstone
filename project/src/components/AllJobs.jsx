import { useEffect } from "react"
import { useState } from "react"
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Spinner } from "react-spinners"
import { SpinnerCircular } from "spinners-react"
import SingleJob from "./SingleJob"



const AllJobs = () => {
    const [jobs, setJobs] = useState([])
    const [filteredJobs, setFilteredJobs] = useState([])
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
                const jobsdata = data.data
                setJobs(jobsdata)
                setFilteredJobs(jobsdata)
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
        setFilteredJobs(filteredJobs)
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
                        <div className="text-center"><SpinnerCircular size={50} thickness={180} speed={88} color="rgba(57, 90, 172, 1)" secondaryColor="rgba(165, 57, 172, 0.44)" /></div>
                    )}
                    {filteredJobs &&
                        filteredJobs.slice(0,20).map(job => (
                          <SingleJob job={job}/>  
                        ))
                    }
                </Col>
            </Row>
        </Container>
    )
}
export default AllJobs