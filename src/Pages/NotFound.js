import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Container>
          <h1>404 - Page Not Found</h1>
          <p>The page you're looking for could not be found.</p>
          <Button as={Link} to="/" variant="primary">
            Go to Home
          </Button>
    </Container>
  )
}

export default NotFound