import { Container, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Signup.css'
const Signup = () => {
    return (
        <Container>
            <Form className= 'formStyle'>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="3">
                        Email:-
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control type="text" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                        Password:-
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                        Birth Date:-
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control type="date" placeholder="D.O.B" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                        Contact No:-
                    </Form.Label>
                    <Col sm="7">
                        <Form.Control type="number" placeholder="Contact number" />
                    </Col>
                </Form.Group>
                <Button variant="dark">Signup</Button> 
            </Form>
        </Container>
    )
}
export default Signup;