import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Hero = () => {
    return (

        <div className="jumbotron d-flex hero" style={{borderBottom: '3px solid light grey', boxShadow: "0 2px 4px rgb(0 0 0 / 8%)"}}>
            <div className="mr-2">
                <h1 className="display-4 font-weight-bold">West 3 Solutions!</h1>
                <p className="lead" style={{ color: "inherit", fontWeight: "bold" }}>The easiest way to get hired.</p>
                <hr className="my-5" />
                <p style={{ color: "inherit", fontWeight: "bold" }}>We recruit and deploy IT and business professionals to work with our clients around the UK, creating careers by bridging the gap between you and our clients.</p>
                <Link className="btn btn-lg mr-3 button" to="/AllJobs" role="button">LOOKING FOR A JOB?</Link>
                <Link className="btn btn-lg button" to="/registration" role="button">REGISTER CV</Link>
            </div>
            <div>
                <img className="hero-img" src="https://thumbs.dreamstime.com/b/job-search-human-resources-recruitment-career-business-internet-technology-concept-job-search-human-resources-recruitment-career-101330689.jpg" alt="Hero Image" />
            </div>
        </div>

    )
}
export default Hero