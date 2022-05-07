import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Bike Gallery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="allInventory">AllInventory</Nav.Link>
                            <Nav.Link href="#priGcing">PrJJicing</Nav.Link>
                            <Nav.Link href="#priHcing">PriFcing</Nav.Link>
                            <Nav.Link href="#pricWing">PricUing</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
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