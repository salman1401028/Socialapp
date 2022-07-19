import { Container, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Login.css'
const Login = () => {
    return (
        <Container>
            <Form className= 'formStyle'>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control type="text" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Button variant="dark">Login</Button> 
            </Form>
        </Container>
    )
}
export default Login;