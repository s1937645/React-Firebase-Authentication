import RNavbar from "./RNavbar/RNavbar";
import FbNavbar from "../FbNavbar";
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./logsign.css"
export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    
    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
          navigate('/');
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }

  return (
    <>
    <RNavbar />
    <div className="signbox">
        <Card >
            <Card.Body>
                <h2 className='text-center mb-4'>Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {useAuth.currentUser && <h1>You are signed in: {useAuth.currentUser.emailRef}</h1>}
                {!useAuth.currentUser && <h1>You are not signed in</h1>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit" style={{marginTop: 10}}>Sign Up</Button>
                </Form>
                
            </Card.Body>
        </Card>
        
        <div className='w-100 text-center mt-2' >
            Already have an account? <Link to="/login">Log In</Link>
        </div>
        <br></br>
        <p className="disclaim">Create an account to gain full acess and do not exit this page.<br></br>
        Doing so will leave you without a full access account and you may<br></br>
        still have been charged but will not have access. If this does happen<br></br>
        contact nb15galle@gmail.com</p>
        </div>
    </>
  )
}
