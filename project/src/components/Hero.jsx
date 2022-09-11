import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Hero = () => {
    return (

        <div className="jumbotron d-flex hero" style={{ borderBottom: '3px solid light grey', boxShadow: "0 2px 4px rgb(0 0 0 / 8%)" }}>
            <Container>
                <Row>
                    <Col md={12} lg={8}>

                        <div className="mr-2">
                            <h1 className="display-4 font-weight-bold">West 3 Solutions!</h1>
                            <p className="lead" style={{ color: "inherit", fontWeight: "bold" }}>The easiest way to get hired.</p>
                            <hr className="my-5" />
                            <p style={{ color: "inherit", fontWeight: "bold" }}>We recruit and deploy IT and business professionals to work with our clients around the UK, creating careers by bridging the gap between you and our clients.</p>
                            <Link className="btn btn-lg mb-1 mr-3 button" to="/AllJobs" role="button">LOOKING FOR A JOB?</Link>
                            <Link className="btn btn-lg mb-1 button" to="/registration" role="button">REGISTER CV</Link>
                        </div>
                    </Col>
                    <Col xs={12} lg={4}>
                        <div>
                            <img className="hero-img" src="https://thumbs.dreamstime.com/b/job-search-human-resources-recruitment-career-business-internet-technology-concept-job-search-human-resources-recruitment-career-101330689.jpg" alt="Hero Image" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
export default Hero