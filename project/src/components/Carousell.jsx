import { Carousel, Container } from 'react-bootstrap'

const Carousell = () => {
    return (
        <Container >
            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg"
                        alt="Data Science"
                    />
                    <Carousel.Caption>
                        <h2 className='text-white'>Data Science and Big Data</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://inteng-storage.s3.amazonaws.com/img/iea/nR6bkXZxwo/sizes/software-engineering-skills_resize_md.jpg"
                        alt="Software Development"
                    />

                    <Carousel.Caption>
                        <h2 className='text-white'>Software Development</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://www.networkerstechnology.com/sites/networkers/files/wysiwyg/images/articles/large-image/cloud-for-web.jpg"
                        alt="Cloud"
                    />

                    <Carousel.Caption>
                        <h2 className='text-white'>Cloud</h2>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://www.cisco.com/c/dam/assets/swa/img/anchor-info/what-is-it-security-628x353.jpg"
                        alt="IT Security"
                    />

                    <Carousel.Caption>
                        <h2 className='text-white'>IT Security</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://www.ecosys.net/wp-content/uploads/2021/02/Project-Analytics-feature.jpg"
                        alt="Analytics"
                    />

                    <Carousel.Caption>
                        <h2 className='text-white'>Analytics</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2016Q4/8-steps-to-build-a-project-management-timeline@2x.png"
                        alt="Cloud"
                    />

                    <Carousel.Caption>
                        <h2 className='text-white'>Project Management</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>

    )
}

export default Carousell