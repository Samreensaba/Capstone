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
        <Container className="pt-4 pl-5 mt-3 mb-3" style={{backgroundColor: "whitesmoke", border: "1px solid grey"}}>
            <Row>
                <Col xs={12} md={12} className="mt-4">
                    {job &&
                        <>
                            <div style={{ borderBottom: '3px solid light grey', marginBottom: "3rem", boxShadow: "0 2px 4px rgb(0 0 0 / 8%)" }}>
                                <div style={{ borderBottom: "2px solid rgba(0,0,0,.08)", padding: '10px' }}><h1 className='text-dark'>{job.title}</h1></div>
                                <div className="d-flex justify-content-around mt-3 mb-4" style={{ backgroundColor: "rgb(211, 223, 250)",border: "2px solid white", padding: '10px' }}>
                                    <div className="text-center" style={{borderRight: "0.2px solid black", paddingLeft: '6.1rem', paddingRight: '6.1rem' }}>
                                        <div className="text-black-50">Salary</div>
                                        <div>{job.salary}</div>
                                    </div>
                                    <div className="text-center" style={{ borderRight: "0.2px solid black", paddingLeft: '6.1rem', paddingRight: '6.1rem' }}>
                                        <div className="text-black-50">Location</div>
                                        <div>{job.candidate_required_location}</div>
                                    </div>
                                    <div className="text-center" style={{ borderRight: "0.2px solid black", paddingLeft: '6.1rem', paddingRight: '6.1rem' }}>
                                        <div className="text-black-50">Category</div>
                                        <div>{job.category}</div>
                                    </div>
                                    <div className="text-center" style={{ paddingLeft: '6.1rem', paddingRight: '6.1rem' }}>
                                        <div className="text-black-50">Type</div>
                                        <div>{job.job_type}</div>
                                    </div>
                                </div>
                                <a href={job.url} ><Button className='m-3 button'>Apply on Company website</Button></a>
                                <Link to="/registration"><Button className='button'>Apply through W3 Solutions</Button></Link>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: job.description }} />
                        </>
                    }
                </Col>
            </Row>
        </Container>
    )
}
export default JobDetails