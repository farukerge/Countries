import React from 'react'
import {
    Container,
    Navbar,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to={"/"} style={{textDecoration: "none"}}>
          <Navbar.Brand>
            Countries
          </Navbar.Brand>
        </Link>
        </Container>
      </Navbar>
  )
}

export default Header