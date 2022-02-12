import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
const Header = () => {
  return (
     <>
     <Navbar bg="dark" variant="dark">
       <Container>
       <Navbar.Brand href="#home">YouKraft Assignment</Navbar.Brand>
       </Container>
     </Navbar>
   </>
  )
}

export default Header