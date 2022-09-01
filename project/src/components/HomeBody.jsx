import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const HomeBody = () => {
    return (
        <Container className="pt-2 mb-3" style={{border: "1px solid grey", backgroundColor: "whitesmoke"}}>
            <Row>
                <Col xs={12} md={6}>
                <h2>Data Science/Big Data</h2>
                    <Card className="bg-dark text-white card">
                        <Card.Img className="img-fluid card-img" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg" alt="Data Science image" />
                        <Card.ImgOverlay>
                            <Card.Title className="font-weight-bold">Data Science and Big Data</Card.Title>
                            <Card.Text className="font-weight-bold">
                                Look at the hottest data science jobs in the market right now.
                            </Card.Text>
                            <Link to="/BigData"><Button className="card-bttn bttn button">EXPLORE JOBS</Button></Link>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                <h2>Software Development</h2>
                    <Card className="bg-dark text-white card">
                        <Card.Img className="img-fluid card-img" src="https://inteng-storage.s3.amazonaws.com/img/iea/nR6bkXZxwo/sizes/software-engineering-skills_resize_md.jpg" alt="software image" />
                        <Card.ImgOverlay>
                            <Card.Title className="font-weight-bold">Software Development</Card.Title>
                            <Card.Text className="font-weight-bold">
                                In Demand developers role for 2022.
                            </Card.Text>
                            <Link to="/software"><Button className="card-bttn bttn button">EXPLORE JOBS</Button></Link>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                <h2>Cloud</h2>
                    <Card className="bg-dark text-white card">
                        <Card.Img className="img-fluid card-img" src="https://www.networkerstechnology.com/sites/networkers/files/wysiwyg/images/articles/large-image/cloud-for-web.jpg" alt="Clouds image" />
                        <Card.ImgOverlay>
                            <Card.Title className="font-weight-bold">Cloud</Card.Title>
                            <Card.Text className="font-weight-bold">
                                Higest paying jobs in cloud infrastucture.
                            </Card.Text>
                            <Link to="/cloud"><Button className="card-bttn bttn button">EXPLORE JOBS</Button></Link>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                <h2>IT Security</h2>
                    <Card className="bg-dark text-white card">
                        <Card.Img className="img-fluid card-img" src="https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-it-security-628x353.jpg" alt="IT Securityimage" />
                        <Card.ImgOverlay>
                            <Card.Title className="font-weight-bold">IT Security</Card.Title>
                            <Card.Text className="font-weight-bold">
                                Higest Paying Cyber Security jobs in the market.
                            </Card.Text>
                            <Link to="/ITSecurity"><Button className="card-bttn bttn button">EXPLORE JOBS</Button></Link>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                <h2>Analytics</h2>
                    <Card className="bg-dark text-white card">
                        <Card.Img className="img-fluid card-img" src="https://www.ecosys.net/wp-content/uploads/2021/02/Project-Analytics-feature.jpg" alt="Analytics image" />
                        <Card.ImgOverlay>
                            <Card.Title className="font-weight-bold">Analytics</Card.Title>
                            <Card.Text className="font-weight-bold">
                                Transition your career into Analytics.
                            </Card.Text>
                            <Link to="/analytics"><Button className="card-bttn bttn button">EXPLORE JOBS</Button></Link>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <h2>Project Management</h2>
                    <Card className="bg-dark text-white card">
                        <Card.Img className="img-fluid card-img" src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2016Q4/8-steps-to-build-a-project-management-timeline@2x.png" alt="Project Management image" />
                        <Card.ImgOverlay>
                            <Card.Title className="font-weight-bold">Project Management</Card.Title>
                            <Card.Text className="font-weight-bold">
                                Entry level to skilled level project management jobs.
                            </Card.Text>
                            <Link to="/projectmanagement"><Button className="card-bttn bttn button">EXPLORE JOBS</Button></Link>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default HomeBody