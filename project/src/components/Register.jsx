import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import {Check} from 'react-bootstrap-icons'

const Register = () => {
    return (
        <Container className='registrationForm'>
            <Row >
                <Col xs={12} md={6} className="form">

                    <Form>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder='Enter Your First Name'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder='Enter Your Last Name'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control type="text" placeholder='Mobile Number including area code'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Upload CV</Form.Label>
                            <Form.Control type='file' name='filename'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I agree to all Terms and Conitions" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            
                <Col xs={12} md={6}>
                    <div className='registration-presentation'>
                        <img id='registration-image' src='https://www.michaelpage.co.uk/themes/custom/mp_theme/images/sign-up-modal.png' alt="Registration sample image."/>
                        <div className='list'>
                            <p><Check className='check-icon'/>Apply for jobs with one click</p>
                            <p><Check className='check-icon'/>View your application updates</p>
                            <p><Check className='check-icon'/>Manage your job alerts</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Register