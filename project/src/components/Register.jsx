import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Check } from 'react-bootstrap-icons'

const Register = () => {

    const [addProfile, setAddProfile] = useState({
        first_name: "",
        last_name: "",
        telephone: "",
        email_address: "",
        skills: ""
    })

    const postProfile = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch(
                "http://localhost:3000/profiles",
                {
                    method: "POST",
                    body: JSON.stringify(addProfile),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            // console.log("ADDExperience: ", addExperience);
            // console.log("RESPONSE", response);
            if (response.ok) {
                console.log(response);
                setAddProfile({
                    first_name: "",
                    last_name: "",
                    telephone: "",
                    email_address: "",
                    skills: ""
                });
            } else {
                alert("error");
            }
        } catch (error) {
            alert("error", error);
        }
    }
    return (
        <Container className='registrationForm pt-3' >
            <Row >
                <Col xs={12} md={6} className="form">

                    <Form onSubmit={postProfile}>
                        <Form.Group>
                            <Form.Label>First Name *</Form.Label>
                            <Form.Control type="text" value={addProfile.first_name}
                            onChange={(e) =>
                                setAddProfile({ ...addProfile, first_name: e.target.value })
                            }
                            placeholder='Enter Your First Name' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name *</Form.Label>
                            <Form.Control type="text" value={addProfile.last_name}
                            onChange={(e) =>
                                setAddProfile({ ...addProfile, last_name: e.target.value })
                            }
                            placeholder='Enter Your Last Name' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Telephone *</Form.Label>
                            <Form.Control type="text" value={addProfile.telephone}
                            onChange={(e) =>
                                setAddProfile({ ...addProfile, telephone: e.target.value })
                            }
                            placeholder='Mobile Number including area code' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address *</Form.Label>
                            <Form.Control type="email" value={addProfile.email_address}
                            onChange={(e) =>
                                setAddProfile({ ...addProfile, email_address: e.target.value })
                            }
                            placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Skills *</Form.Label>
                            <Form.Control type="text" value={addProfile.skills}
                                onChange={(e) =>
                                    setAddProfile({ ...addProfile, skills: e.target.value })
                                }
                                placeholder="seperate your skills with commas" />
                                
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Upload CV</Form.Label>
                            <Form.Control type='file' name='filename' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I agree to all Terms and Conitions" />
                        </Form.Group>
                        <Button className='button' type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>

                <Col xs={12} md={6}>
                    <div className='registration-presentation'>
                        <img id='registration-image' src='https://www.michaelpage.co.uk/themes/custom/mp_theme/images/sign-up-modal.png' alt="Registration sample image." />
                        <div className='list'>
                            <p><Check className='check-icon' />Apply for jobs with one click</p>
                            <p><Check className='check-icon' />View your application updates</p>
                            <p><Check className='check-icon' />Manage your job alerts</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Register