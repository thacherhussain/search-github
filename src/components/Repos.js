import React, { useContext } from "react"
import { Row, Col } from "react-bootstrap"

import repoContext from "../context/repoContext"
import Repo from "./Repo"

const Repos = () => {
  const context = useContext(repoContext)

  const { repos } = context

  return (
    <Row className="justify-content-center" style={{ marginTop: '20px'}}>
      <Col md={12}>
        {
          repos.map(repo => (<Repo key={repo.id} repo={repo} />))
        }
      </Col>
    </Row>
  )
}

export default Repos