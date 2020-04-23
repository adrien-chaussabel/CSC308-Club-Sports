import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const styles = {
  menu: {
    backgroundColor: '#154734',
  },
  links: {
    color: '#C9CAC7',
  },
};

const MenuBar = () => (
  <>
    <Navbar style={styles.menu}>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="ml-auto" style={styles.links}>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar>
  </>
);

export default MenuBar;
