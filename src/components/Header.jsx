import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    
        <Navbar className="bg-success">
        <Container>
          <Navbar.Brand>
        <Link to={'/'} className='fs-4' style={{textDecoration:'none',color:'white'}} >
        <i className="fa-solid fa-upload fa-beat-fade"></i> {' '}
        React Bootstrap

        </Link>

          </Navbar.Brand>
        </Container>
      </Navbar>
    
  )
}

export default Header