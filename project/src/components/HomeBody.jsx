import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const HomeBody = () => {
    return (
        <Container className="pt-3 mb-3" style={{border: "1px solid grey", backgroundColor: "black"}}>
            <Row >
                <Col xs={12} md={4} >
                <h3>Data Science/Big Data</h3>
                    <Card className="bg-white text-dark card text-center">
                        {/* <Card.Img className="img-fluid  text-center-img" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg" alt="Data Science image" /> */}
                        {/* <Card.ImgOverlay className="img-overlay"> */}
                        <Card.Body>
                            <Card.Title className="font-weight-bold" style={{height: "50px"}}>Data Science and Big Data</Card.Title>
                            <Card.Text className="font-weight-bold" style={{height: "90px"}}>
                                Look at the hottest data science jobs in the market right now.
                            </Card.Text>
                            <Link to="/BigData"><Button className="card-bttn button">EXPLORE JOBS</Button></Link>
                            </Card.Body>
                        {/* </Card.ImgOverlay> */}
                    </Card>
                </Col>
                <Col xs={12} md={4} >
                <h3>Software Development</h3>
                    <Card className="bg-white text-dark card text-center">
                        {/* <Card.Img className="img-fluid card-img" src="https://inteng-storage.s3.amazonaws.com/img/iea/nR6bkXZxwo/sizes/software-engineering-skills_resize_md.jpg" alt="software image" />
                        <Card.ImgOverlay className="img-overlay"> */}
                        <Card.Body>
                            <Card.Title className="font-weight-bold" style={{height: "50px"}}>Software Development</Card.Title>
                            <Card.Text className="font-weight-bold" style={{height: "90px"}}>
                                In Demand developers role for 2022.
                            </Card.Text>
                            <Link to="/software"><Button className="card-bttn bttn button">EXPLORE JOBS</Button></Link>
                            </Card.Body>
                        {/* </Card.ImgOverlay> */}
                    </Card>
                </Col>
            
                <Col xs={12} md={4} >
                <h2>Cloud</h2>
                    <Card className="bg-white text-dark card text-center">
                        {/* <Card.Img className="img-fluid card-img" src="https://www.networkerstechnology.com/sites/networkers/files/wysiwyg/images/articles/large-image/cloud-for-web.jpg" alt="Clouds image" />
                        <Card.ImgOverlay className="img-overlay"> */}
                        <Card.Body>
                            <Card.Title className="font-weight-bold" style={{height: "50px"}}>Cloud</Card.Title>
                            <Card.Text className="font-weight-bold" style={{height: "90px"}}>
                                Higest paying jobs in cloud infrastucture.
                            </Card.Text>
                            <Link to="/cloud"><Button className="card-bttn bttn button">EXPLORE JOBS</Button></Link>
                            </Card.Body>
                        {/* </Card.ImgOverlay> */}
                    </Card>
                </Col>
                <Col xs={12} md={4} >
                <h2>IT Security</h2>
                    <Card className="bg-white text-dark card text-center">
                        {/* <Card.Img className="img-fluid card-img" src="https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-it-security-628x353.jpg" alt="IT Securityimage" />
                        <Card.ImgOverlay className="img-overlay"> */}
                        <Card.Body>
                            <Card.Title className="font-weight-bold" style={{height: "50px"}}>IT Security</Card.Title>
                            <Card.Text className="font-weight-bold" style={{height: "90px"}}>
                                Higest Paying Cyber Security jobs in the market.
                            </Card.Text>
                            <Link to="/ITSecurity"><Button className="card-bttn bttn button">EXPLORE JOBS</Button></Link>
                            </Card.Body>
                        {/* </Card.ImgOverlay> */}
                    </Card>
                </Col>
            
                <Col xs={12} md={4} >
                <h2>Analytics</h2>
                    <Card className="bg-white text-dark card text-center">
                        {/* <Card.Img className="img-fluid card-img" src="https://www.ecosys.net/wp-content/uploads/2021/02/Project-Analytics-feature.jpg" alt="Analytics image" />
                        <Card.ImgOverlay className="img-overlay"> */}
                        <Card.Body >
                            <Card.Title className="font-weight-bold" style={{height: "50px"}}>Analytics</Card.Title>
                            <Card.Text className="font-weight-bold" style={{height: "90px"}}>
                                Transition your career into Analytics.
                            </Card.Text>
                            <Link to="/analytics"><Button className="card-bttn bttn button">EXPLORE JOBS</Button></Link>
                            </Card.Body>
                        {/* </Card.ImgOverlay> */}
                    </Card>
                </Col>
                <Col xs={12} md={4} >
                    <h2>Project Management</h2>
                    <Card className="bg-white text-dark card text-center">
                        {/* <Card.Img className="img-fluid card-img" src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2016Q4/8-steps-to-build-a-project-management-timeline@2x.png" alt="Project Management image" />
                        <Card.ImgOverlay className="img-overlay"> */}
                        <Card.Body >
                            <Card.Title className="font-weight-bold" style={{height: "50px"}}>Project Management</Card.Title>
                            <Card.Text className="font-weight-bold" style={{height: "90px"}}>
                                Entry level to skilled level project management jobs.
                            </Card.Text>
                            <Link to="/projectmanagement"><Button className="card-bttn bttn button">EXPLORE JOBS</Button></Link>
                            </Card.Body>
                        {/* </Card.ImgOverlay> */}
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default HomeBody