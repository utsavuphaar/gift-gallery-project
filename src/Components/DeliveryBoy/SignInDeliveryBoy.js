import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../User/Header';
import axios from 'axios';
import URL from '../ApiUrl'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function SignInFormDeliveryBoy() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert(email+""+password);
    axios.post(URL.deliveryboysignin, { email, password })
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: result.data.message,
          showConfirmButton: false,
          timer: 2000
        });
        navigate('/deliveryBoy')
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Unauthorized Access",
          text: "Something went wrong ",
        });
        console.log(err);
      })
  };


  return (
    <>
      <Header />
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
      <div className='container-fluid w-100 p-2 d-flex justify-content-center align-content-center' style={{ height: "90vh", backgroundColor: "#f7fafc" }}>
        <Container fluid className="p-5 border h-75 mt-5" >
          <Row className="justify-content-md-center w-100">
            <Col md={6}>
              <h2 className='text-center'>Sign In</h2>
              <p className='text-center'>Welcome back! Please sign in with your email and password.</p>
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
                <Link to="/forgot-password" className="text-decoration-none">
                  <p className="text-center mt-2">Forgot your password?</p>
                </Link>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SignInFormDeliveryBoy;
