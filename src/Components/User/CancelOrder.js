import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Remove Form, FormGroup, and Input imports
import TextField from '@mui/material/TextField';
import { Form, FormGroup, FormCheck } from 'react-bootstrap';
import gift from "./Images/gift.png"
const OrderCancellationForm = () => {
    const [orderNumber, setOrderNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfPurchase, setDateOfPurchase] = useState('');
    const [orderTotal, setOrderTotal] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [romanka, setRomanka] = useState(''); // Additional field (optional)
    const [cancellationReason, setCancellationReason] = useState('');
    const [termsAgreed, setTermsAgreed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation (example)
        if (!orderNumber || !firstName || !lastName || !phone || !email || !dateOfPurchase || !orderTotal || !address || !city || !region || !postalCode) {
            alert('Please fill in all required fields.');
            return;
        }

        // Submission logic
        console.log(orderNumber, firstName, lastName, phone, email, dateOfPurchase, orderTotal, address, city, region, postalCode, romanka, cancellationReason, termsAgreed);

        // Clear form after submission
        setOrderNumber('');
        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('');
        setDateOfPurchase('');
        setOrderTotal('');
        setAddress('');
        setCity('');
        setRegion('');
        setPostalCode('');
        setRomanka('');
        setCancellationReason('');
        setTermsAgreed(false);
    };

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    
                    <Col className='border p-2 mt-2 rounded' xs={12} md={6}>
                        <form onSubmit={handleSubmit}>
                            <h1 className="mb-4">Order Cancellation Form</h1>
                            <TextField
                                label="Order Number / Transaction ID"
                                variant="outlined"
                                value={orderNumber}
                                onChange={(e) => setOrderNumber(e.target.value)}
                                fullWidth
                                required
                                className="mb-3"
                            />
                            <Row>
                                <Col>
                                    <TextField
                                        label="First Name"
                                        variant="outlined"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        fullWidth
                                        required
                                        className="mb-3"
                                    />
                                </Col>
                                <Col>
                                    <TextField
                                        label="Last Name"
                                        variant="outlined"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        fullWidth
                                        required
                                        className="mb-3"
                                    />
                                </Col>
                            </Row>
                            <TextField
                                label="Phone"
                                variant="outlined"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                fullWidth
                                required
                                className="mb-3"
                            />
                            <TextField
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                                required
                                className="mb-3"
                            />
                            <TextField
                                label="Date of Original Purchase"
                                type="date"
                                variant="outlined"
                                value={dateOfPurchase}
                                onChange={(e) => setDateOfPurchase(e.target.value)}
                                fullWidth
                                required
                                className="mb-3"
                            />
                            <TextField
                                label="Order Total"
                                type="number"
                                variant="outlined"
                                value={orderTotal}
                                onChange={(e) => setOrderTotal(e.target.value)}
                                fullWidth
                                required
                                className="mb-3"
                            />
                            <TextField
                                label="Address"
                                variant="outlined"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                fullWidth
                                required
                                className="mb-3"
                            />
                            <Row>
                                <Col>
                                    <TextField
                                        label="City"
                                        variant="outlined"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        fullWidth
                                        required
                                        className="mb-3"
                                    />
                                </Col>
                                <Col>
                                    <TextField
                                        label="Region"
                                        variant="outlined"
                                        value={region}
                                        onChange={(e) => setRegion(e.target.value)}
                                        fullWidth
                                        required
                                        className="mb-3"
                                    />
                                </Col>
                                <Col>
                                    <TextField
                                        label="Postal Code"
                                        variant="outlined"
                                        value={postalCode}
                                        onChange={(e) => setPostalCode(e.target.value)}
                                        fullWidth
                                        required
                                        className="mb-3"
                                    />
                                </Col>
                            </Row>
                            <TextField
                                label="Romanka (Optional)"
                                variant="outlined"
                                value={romanka}
                                onChange={(e) => setRomanka(e.target.value)}
                                fullWidth
                                className="mb-3"
                            />
                            <TextField
                                label="Cancellation Reason"
                                variant="outlined"
                                multiline
                                rows={4}
                                value={cancellationReason}
                                onChange={(e) => setCancellationReason(e.target.value)}
                                fullWidth
                                required
                                className="mb-3"
                            />
                            <FormGroup controlId="formTermsAgreed">
                                <Form.Check
                                    type="checkbox"
                                    label="I agree to the terms and conditions"
                                    checked={termsAgreed}
                                    onChange={(e) => setTermsAgreed(e.target.checked)}
                                    required
                                    className="mb-3"
                                />
                            </FormGroup>
                            <Button type="submit" className="btn btn-primary">Submit</Button>
                        </form>
                    </Col>
                    
                </Row>
            </Container>
        </>
    );
};

export default OrderCancellationForm;
