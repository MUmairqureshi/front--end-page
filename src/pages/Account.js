import React from "react";
import { Form, Button, Container, Card, Alert } from "react-bootstrap"

import { useNavigate } from "react-router";
import { useUserAuth } from "../contexts/UserAuthContext";

 const Account = () => {
  console.log(useUserAuth)
  const { logOut, user } = useUserAuth();
  console.log(user)
  console.log(logOut)
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
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
    

      <div className="p-4 box mt-3 text-center">

        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      </div>
      </Container>
    </>
  );
};

export default Account;