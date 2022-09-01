import { useEffect } from "react"
import { useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"

const ContactUs = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        fetchProfiles()
    }, [])

    const fetchProfiles = async () => {
        try {
            const response = await fetch("http://localhost:3000/profiles")
            if (response.ok) {
                const profiles = await response.json()

                console.log(profiles)
                setList(profiles)
                console.log("this is a new array", list)
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
        <Container>
            <Row>
            {list &&
                list.map(profile => (
                    <Col xs={6} md={4}>
                    <Card border="light" style={{ height: '9rem' }}>
                        <Card.Header>{profile.first_name} {profile.last_name}</Card.Header>
                        <Card.Body>
                            <Card.Title>{profile.email_address}</Card.Title>
                            <Card.Text>
                                {profile.telephone}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))
            }
            </Row>

        </Container>
    )
}
export default ContactUs