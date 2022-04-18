import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './form.css'

import { Form, Button, Container, Card, Alert } from "react-bootstrap"
import GoogleButton from "react-google-button";
import { useUserAuth } from "../contexts/UserAuthContext";
// import { Container, Row, Col } from "react-bootstrap";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  console.log(logIn)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/account");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/account");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          
          <Card>
      <div className="p-4 box">
        <h2 className="mb-3">  Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)} required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">

            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} required
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        <hr />
        {/* <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div> */}
      </div>
      </Card>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      



































          {/* <Card>
            <Card.Body>

              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email"               onChange={(e) => setEmail(e.target.value)} ref={email} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} ref={password} required />
                </Form.Group>
             
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>

        </div> */}
        </div>
      </Container>
    </>
  );
};

export default Login;