import React from "react"
import { Button, Row, Col, Card } from "react-bootstrap"
import { FiStar } from "react-icons/fi"

const Repo = ({ repo }) => {
  return (
    <Row>
      <Col md={12} className="justify-content-center">
        <Card style={{ margin: '10px auto' }}>
          <Card.Body>
            <Card.Title>{repo.name}</Card.Title>
            <Card.Text>
              {repo.description}
            </Card.Text>
            <Card.Text>
              <FiStar />
              <span style={{ verticalAlign: 'middle', paddingLeft: 5 }}>
                {
                  repo.stargazers_count > 1000 ?
                    <span>{parseFloat((`${repo.stargazers_count}` / 1000).toFixed(1))} k</span>
                    :
                    <span>{repo.stargazers_count}</span>
                }
              </span>
            </Card.Text>
            <Button variant="primary" href={repo.html_url}>Go to Repo</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Repo