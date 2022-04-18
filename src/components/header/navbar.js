import React, { useState } from "react";
import logo from './log.jpg'
import './head.scss'
import { NavDropdown, Container, Form, FormControl, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Nav, Navbar } from "react-bootstrap";


export function Head() {



  return (
    <div className="header">


      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand className="brand-logo" cl="blue" href="#home">   <h3 className="brand h3">         <img src={logo} alt="Placholder Image 2" class="product-frame" /> </h3> </Navbar.Brand>

          <div class="collapse navbar-collapse text-white nav-white" id="navbarSupportedContent">
            <ul class="navbar-nav text-white mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="link  active text-white" to="/" >  Home </Link>
              </li>
              <li class="nav-item">
                <Link className="link  active text-white" to="/"> Communities </Link>
              </li>
              <li class="nav-item">
                <Link className="link  active text-white" to="/" > Investors </Link>
              </li>

              <li class="nav-item">
                <Link className="link  active text-white" to="/" > Contact </Link>
              </li>
            </ul>
          </div>

          <Nav className="shop-card">
            {/* <Nav  className="shop-card"> */}

            <Navbar.Text className="navbar-text">
              <a href="#login" className="shop-card text-white"> Search<SearchIcon /> </a>

            </Navbar.Text>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-1 mb-lg-0">
                <li class="nav-item text-white">
                  <Link to="./login" class="nav-link active text-white" aria-current="page" >
                    Login <AssignmentIndIcon />
                  </Link>
                </li>

              </ul>
            </div>
          </Nav>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">   <h3 className="brand h3">         <img src={logo} alt="Placholder Image 2" class="product-frame" /> </h3>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="nav-link">
              <Nav className="justify-content-end flex-grow-1 pe-3 text-black" id="nav-link">

                <Link className="link  active  text-black" to="/" >  <p> Home </p> </Link>
                <Link className="link  active  text-black" to="/" > <p> Communities </p> </Link>
                <Link className="link  active  text-black" to="/" > <p> Investors  </p></Link>
                <Link className="link  active  text-black" to="/" > <p> Contact  </p></Link>
                <Link to="./login" class="nav-link active text-black" aria-current="page" >
                  <p>  Login</p> <AssignmentIndIcon />
                </Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>




    </div>
  );
}
