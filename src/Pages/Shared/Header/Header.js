import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Bike Gallery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/allInventory">AllInventory</Nav.Link>
                            <Nav.Link href="#priGcing">PrJJicing</Nav.Link>
                            <Nav.Link href="#priHcing">PriFcing</Nav.Link>
                            <Nav.Link href="#pricWing">PricUing</Nav.Link>
                            
                        </Nav>
                        <Nav className=''>
                            <Nav.Link eventKey={2} href="#memes">
                               Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;