import React, { useState, useContext } from "react"
import { Button, Row, Col, Form } from "react-bootstrap"

import repoContext from "../context/repoContext"
import Repos from "./Repos"

const Search = () => {

  const [queryText, setQueryText] = useState('')
  const context = useContext(repoContext)

  const { repos, loading } = context

  const onChange = (e) => {
    setQueryText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    context.getRepos(queryText)
    setQueryText('')
  }
  const handleClearRepos = (e) => {
    e.preventDefault()
    context.clearRepos()
  }

  return (
    <Row>
      <Col md={12} className="justify-content-center">
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Search Repos..."
              value={queryText}
              onChange={onChange}
              />
            <Form.Text className="text-muted">
              Enter any keyword and we'll return the related repos with the most stars
            </Form.Text>
          </Form.Group>
          <Button variant="secondary" onClick={handleClearRepos} style={{ marginRight: 5 }}>Clear</Button>
          <Button 
            variant="primary"
            type="submit"
            value="search"
            onClick={!loading ? onSubmit : null}>
            {loading ? 'Loading…' : 'Search'}
          </Button>
        </Form>
      </Col>
      <Col md={12} className="justify-content-center">
        <Repos repos={repos} />
      </Col>
    </Row>
  )
}

export default Search