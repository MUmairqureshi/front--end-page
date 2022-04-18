import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import { Form, Button, Container, Card, Alert } from "react-bootstrap"

import { useUserAuth } from "../contexts/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
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
              <h2 className="mb-3"> Signup</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  
                  <Form.Control
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}  required
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
                    Sign up
                  </Button>
                </div>
              </Form>
            </div>

            </Card>
            <div className="p-4 box mt-3 text-center">
              Already have an account? <Link to="/login">Log In</Link>
            </div>
           </div>

           </Container>
          </>
          );
};

          export default Signup;