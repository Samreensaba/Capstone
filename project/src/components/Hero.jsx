import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Hero = () => {
    return (

        <div className="jumbotron d-flex hero">
            <div className="mr-2">
                <h1 className="display-4 font-weight-bold">West 3 Solutions!</h1>
                <p className="lead" style={{ color: "inherit", fontWeight: "bold" }}>The easiest way to get hired.</p>
                <hr className="my-5" />
                <p style={{ color: "inherit", fontWeight: "bold" }}>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <Link className="btn btn-primary btn-lg mr-3 bg-success" to="/AllJobs" role="button">LOOKING FOR A JOB?</Link>
                <Link className="btn btn-primary btn-lg bg-white text-success" to="/registration" role="button">REGISTER CV</Link>
            </div>
            <div>
                <img className="hero-img" src="https://thumbs.dreamstime.com/b/job-search-human-resources-recruitment-career-business-internet-technology-concept-job-search-human-resources-recruitment-career-101330689.jpg" alt="Hero Image" />
            </div>
        </div>

    )
}
export default Hero