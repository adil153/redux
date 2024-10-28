import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-brands fa-product-hunt" />
            {' '}
            Products
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header