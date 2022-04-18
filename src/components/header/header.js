import { Home } from '../home/home'
import { Head } from './navbar'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ForgotPassword from "../../pages/ForgotPassword";
import Account from "../../pages/Account";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import ProtectedRoute from "../../pages/ProtectedRoute";
import { UserAuthContextProvider } from "../../contexts/UserAuthContext";

export function Header() {



  return (
    <div className="App">
      <Router>
        <Head />

        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/account" element={<ProtectedRoute>
              <Account />
            </ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </UserAuthContextProvider>

      </Router>
    </div>
  );
}
