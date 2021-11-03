import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../../Context/UseAuth';

const Header = () => {
    const { users, logOut } = UseAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/home#experts">Experts</Nav.Link>
                        {users.email ?
                            <button onClick={logOut} className="btn btn-light">Log Out</button>
                            :
                            <Nav.Link as={Link} to="/login">login</Nav.Link>
                        }

                        <Navbar.Text>
                            Signed in as: <a href="#login">{users.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;