import React, { useRef, useState } from "react"
import { Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Login.css"
import { Row, Button, Form, Col } from 'react-bootstrap' 


export const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    // The user id is saved under the key shakeitup_user_user in session Storage. Change below if needed!
                    sessionStorage.setItem("shakeitup_user", exists.id)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <Container className="container--login">
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>
            <section>
                <Form className="form--login" onSubmit={handleLogin}>
                    <h1>Shake It Up</h1>
                    <h2>For Cocktail Creatives</h2>
                    <fieldset>
        
                        <Form.Control type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus
                            value={loginUser.email}
                            onChange={handleInputChange} />
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
                            </Col>
                        </Row>
                    </fieldset>
                </Form>
            </section>
        </Container>
    )
}
