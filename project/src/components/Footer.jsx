import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col xs={12} md={6} className="pt-3">
                        <h3 style={{color:"whitesmoke"}}>WEST 3 SOLUTIONS</h3>
                        <h6>Registered Address:</h6>
                        <p>55 Wilberforce Road<br/>
                        London<br/>
                        NW9 6AT</p>
                    </Col>
                    <Col xs={12} md={6} className="pt-5">

                        <h6>Contact US:</h6>
                        <p>Phone: 0123 456 789 <br/>
                        Email: admin@west3solutions.co.uk</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer