import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'


const JobDetails = () => {

    const [job, setJob] = useState(null)

    const params = useParams()
    console.log('PARAMS', params)
    let jobId = params.jobId

    useEffect(() => {
        fetchDetails()
    }, [jobId])

    const fetchDetails = async () => {
        try {
            const response = await fetch("https://strive-jobs-api.herokuapp.com/jobs?_id=" + jobId)
            if (response.ok) {
                const job = await response.json()
                const details = job.data[0]
                console.log(details)
                setJob(details)
            }
            else {
                console.log("error")
            }

        }
        catch (error) {
            console.log(error)
        }
    }




    return (
        <Container className="body p-5">
            <Row>
                <Col xs={12} md={10} className="mt-4">
                    {job &&
                        <>
                            <p className='ml-5'>Ref: {job._id}</p>
                            <h1 className='text-info'>{job.title}</h1>
                            <div className="d-flex justify-content-around mt-5 mb-5">
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
                            <div className='ml-5'>Published on: {job.publication_date}</div>
                            <a href={job.url} ><Button variant='success' className='m-3'>Apply on Company website</Button></a>
                            <Link to="/registration"><Button variant='info'>Apply through W3 Solutions</Button></Link>

                            <div dangerouslySetInnerHTML={{__html: job.description}} />
                        </>
                    }
                </Col>
            </Row>
        </Container>
    )
}
export default JobDetails