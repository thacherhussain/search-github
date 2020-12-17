import React from "react"
import { Row, Col } from "react-bootstrap"

import Search from "../components/Search"
import Repos from "../components/Repos"

const Home = () => {
  return (
    <>
      <Row>
        <Col md={12} className="justify-content-center">
          <p style={{ margin: '20px auto', fontSize: '1.5rem', fontWeight: 500 }}>
            Search for GitHub Repos with the most stars!
            </p>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="justify-content-center">
          <Search />
        </Col>
      </Row>
      <Row>
        <Col md={12} className="justify-content-center">
          <Repos />
        </Col>
      </Row>
    </>
  )
}

export default Home