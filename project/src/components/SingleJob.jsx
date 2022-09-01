import { Button, Card } from "react-bootstrap"
import { Star, StarFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addToFav, removeFromFav } from "../store/actions"
import { useEffect } from "react"

const SingleJob = ({job}) => {

    const favourites = useSelector((state)=>state.favourites)
    const dispatch = useDispatch()
    const isFav = favourites.find((job)=>job._id === job._id)

    useEffect(() => {
        console.log(favourites);
    }, [favourites])

    const toggleFavourite =(job)=>{ 
        isFav 
        ?dispatch(removeFromFav(job))
        :dispatch(addToFav(job)) }
    return (
        <>
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
                    <Link to={`/jobDetails/${job._id}`}><Button className="button mr-5">Know More</Button></Link>
                    {
                        isFav
                            ? <StarFill color="gold" size={20} onClick={() => { toggleFavourite(job) }} />
                            : <Star color="black" size={20} onClick={() => { toggleFavourite(job) }} />
                    }
                </Card.Body>

            </Card>
        </>
    )
}

export default SingleJob