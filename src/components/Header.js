import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const Header=()=>{


    return(
        <header >
      <Navbar style={{backgroundColor:"cadetblue"}} expand="lg" variant='dark' collapseOnSelect>
      <Container>
        <LinkContainer to='/' >
          <Navbar.Brand className='title' style={{ marginRight: '10px', fontSize: '1.5rem'}}>DB4Cloud Technologies</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">         
          <Nav className="ms-auto">
             <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/employees'>
              <Nav.Link>Employees</Nav.Link>
            </LinkContainer>
           {/* {userInfo && userInfo.length!==0 ? (
              <NavDropdown title={userInfo.name} id ="username">
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : 
            <LinkContainer to='/login'>
            <Nav.Link ><i className='fas fa-user'></i>Sign In</Nav.Link>
            </LinkContainer>
          }
          {userInfo && userInfo.isAdmin &&(
            <NavDropdown title='Admin' id ="adminmenu">
            <LinkContainer to='/admin/userlist'>
              <NavDropdown.Item>Users</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/admin/productlist'>
              <NavDropdown.Item>Products</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/admin/orderlist'>
              <NavDropdown.Item>Orders</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          )}
          
             <SearchBox  /> */}
          
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    )
}


export default Header