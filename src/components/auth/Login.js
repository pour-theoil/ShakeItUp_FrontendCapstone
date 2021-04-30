import React, { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom";
import "./Login.css"
import { Row, Button, Form, Col, Container} from 'react-bootstrap'
import { FirebaseContext } from './FirebaseProvider' 


export default function Login() {
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    const { login } = useContext(FirebaseContext)
    const { signInWithGoogle } = useContext(FirebaseContext)
    const history = useHistory()


    const loginGoogle = () => {
        signInWithGoogle()
            .then(response => history.push("/"))
    }

    const handleLogin = (e) => {
        e.preventDefault()
        login(email, password)
        .then(()=> history.push(""))
        .catch(() => alert("Credentials are not recongnized"))
    }

    return (
        <Container className="container--login">
                <Form className="form--login" onSubmit={handleLogin}>
                    <h1>Shake It Up</h1>
                    <h2>For Cocktail Creatives</h2>
                    <fieldset>
                    <Form.Group controlId="formBasicEmail" className="mb-2">
                        <Form.Control type="email" placeholder="Email Address" onChange={e => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    
                    </fieldset>
                    <fieldset>
                        <Row className="link--register">
                            <Col>
                            <Button type="submit">
                            Sign in
                            </Button>
                            </Col>
                            <Col>
                                <Link to="/register">Register for an account</Link>
                                {/* <Button block onClick={loginGoogle} variant="outline-success">Continue with Google</Button> */}
                            </Col>
                        </Row>
                    </fieldset>
                </Form>
        </Container>
    )
}
