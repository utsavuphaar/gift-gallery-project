import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'; // Import Axios
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify
import Swal from 'sweetalert2';

function DeliveryBoySignUpForm() {
  const [contact, setContact] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State variables for validation
  const [contactError, setContactError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Reset previous errors
    setContactError('');
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Validation logic
    let isValid = true;
    if (!contact) {
      setContactError('Contact number is required');
      isValid = false;
    } else if (!/^\d{10}$/.test(contact)) {
      setContactError('Contact must be a 10-digit number');
      isValid = false;
    }
    if (!username) {
      setUsernameError('Username is required');
      isValid = false;
    }
    if (!email) {
      setEmailError('Email address is required');
      isValid = false;
    }
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    if (isValid) {
      try {
        // Make API call using Axios
        const response = await axios.post(process.env.REACT_APP_DELIVERY_BOY_SIGNUP, {
          contact,
          name: username,
          email,
          password,
        });
        console.log(response.data); // Handle successful response
        // Show success message using toastify
        // toast.success('Account created successfully!');
        // alert("Account Create Successfully..")
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account Created Successfully",
          showConfirmButton: false,
          timer: 2000
      });
        // Clear form fields
        setContact('');
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } catch (error) {
        console.error('Error creating account:', error); // Handle error
      }
    }
  };

  return (
    <Container fluid className="p-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>Create an account</h2>
          <p>Welcome to Flexible Theme! Don't have an account? It takes less than a minute. If you already have an account, Login here.</p>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <span style={{ color: 'red' }}>{usernameError}</span>
            <TextField
              label="Contact"
              variant="outlined"
              fullWidth
              margin="normal"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
            <span style={{ color: 'red' }}>{contactError}</span>
            <TextField
              label="Email address"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span style={{ color: 'red' }}>{emailError}</span>
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
            <span style={{ color: 'red' }}>{passwordError}</span>
            <TextField
              label="Re-enter password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span style={{ color: 'red' }}>{confirmPasswordError}</span>
            <Button variant="contained" type="submit" color="primary" fullWidth margin="normal">
              CREATE ACCOUNT
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default DeliveryBoySignUpForm;
