import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Hero2 = ({ heading, description, image }) => {
    return (

        <div className="jumbotron d-flex hero " style={{ borderBottom: '3px solid light grey', boxShadow: "0 2px 4px rgb(0 0 0 / 8%)" }}>
            <Container>
                <Row>
                    <Col xs={12} lg={8}>
                        <div className="mr-2 pt-5">
                            <h1 className="display-4 font-weight-bold">{heading}</h1>
                            <hr className="my-5" />
                            <p style={{ color: "inherit", fontWeight: "bold" }}>{description}</p>
                        </div>
                    </Col>
                    <Col xs={12} lg={4}>
                        <div>
                            <img className="hero-img" src={image} alt="Hero Image" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
export default Hero2