import React from "react";
import { Nav } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import {Link} from 'react-router-dom'

 const HomeScreen=()=>{
  return (

    <>
      <h1> Welcome to the DB4 Cloud Technologies Private Limited</h1>
      <p>Here is the step by step guide to complete onboarding process</p>
      <Nav.Link as={Link} to="/register">
        Click Here to <strong style={{color:"blue", fontWeight:"400"}} >Register</strong>
      </Nav.Link>
    </>
  )
}

export default HomeScreen
