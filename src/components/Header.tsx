import React, { Component } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {

}

interface State {

}

export default class Header extends Component<Props, State> {
  state = {};

  render() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Contact List</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link ><Link to="/other/45">Other Page</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
  }
}
