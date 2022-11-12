import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handelSignOut = () => {

        signOut(auth)
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Bike Gallery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/allInventory">Manage Inventories</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="addItem">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to="myItems">My Items</Nav.Link>
                                </>
                            }


                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none ' onClick={handelSignOut}>Log Out</button>
                                    :
                                    <Nav.Link className='mx-3 text-white' as={Link} to="/login">Log In</Nav.Link>
                            }

                            {
                                user && <>
                                    <img width={'40px'} className='rounded-circle' data-bs-toggle="tooltip" data-bs-placement="bottom" title={user.displayName} src={user.photoURL} alt="" />
                                    
                                </>
                            }
                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;