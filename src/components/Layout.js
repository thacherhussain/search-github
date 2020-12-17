import React from "react";
import { Container, Navbar } from "react-bootstrap"
import { Helmet } from "react-helmet"
import { FiGithub } from "react-icons/fi"

const Layout = (props) => {
  return (
    <>
      <Helmet>
        <title>GitHub Search</title>
      </Helmet>
      <Navbar expand="sm" style={{ backgroundColor: '#20a39e' }}>
        <Navbar.Brand style={{ color: 'white' }}>
          <FiGithub />
          <span style={{ verticalAlign: 'middle', paddingLeft: 5 }}>
            GitHub Search
          </span>
        </Navbar.Brand>
      </Navbar>
      <Container>{props.children}</Container>
    </>
  );
};

export default Layout
