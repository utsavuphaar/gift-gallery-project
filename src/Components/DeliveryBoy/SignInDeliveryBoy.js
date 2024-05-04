import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../User/Header';

function SignInFormDeliveryBoy() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    console.log(email, password);
  };

  return (
    <>
    <Header/>
      <Container fluid className="p-5">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2>Sign In</h2>
            <p>Welcome back! Please sign in with your email and password.</p>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email address"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button variant="contained" type="submit" color="primary" fullWidth margin="normal">
                SIGN IN
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SignInFormDeliveryBoy;
