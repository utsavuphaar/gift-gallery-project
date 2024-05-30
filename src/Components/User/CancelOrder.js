import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Remove Form, FormGroup, and Input imports
import TextField from '@mui/material/TextField';
import { Form, FormGroup, FormCheck } from 'react-bootstrap';
import gift from "./Images/gift.png"
import Swal from 'sweetalert2';
import axios from 'axios';
import ApiUrl from '../ApiUrl';
import cancelOrderImg from './Images/cancelled.png'
import { useLocation, useNavigate } from 'react-router-dom';
const OrderCancellationForm = () => {
    const { state } = useLocation();
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
    const navigate = useNavigate();
    // console.log(state)
    // alert(state[0].orderId)
    const id = state[0].orderId;
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Form validation (example)
        if (!orderNumber || !firstName || !lastName || !phone || !email || !dateOfPurchase) {
            alert('Please fill in all required fields.');
            return;
        }

        // Submission logic
        const result = await axios.post("http://localhost:3000/order/getParticularOrder", { id })
        console.log(result.data.result)
        const orderId = result.data.result.orderId;
        const fName = result.data.result.firstName;
        const lName = result.data.result.lastName;
        const contact = result.data.result.contact;
        console.log(orderId + " " + fName + " " + lName + " " + contact)

        if (orderId == orderNumber && fName == firstName && lastName == lName && contact == phone) {
            await axios.put(ApiUrl.updateOrderStatus, { id, status: "Cancelled" });
            Swal.fire({
                position: "center",
                position: "center",
                icon: "success",
                title: "Order Cancelled Successfully",
                showConfirmButton: false,
                timer: 2000
            });
            console.log(orderNumber, firstName, lastName, phone, email, dateOfPurchase, orderTotal, address, city, region, postalCode, romanka, cancellationReason, termsAgreed);
            setOrderNumber('');
            setFirstName('');
            setLastName('');
            setPhone('');
            setEmail('');
            setDateOfPurchase('');
            setCancellationReason('');
            setTermsAgreed(false);
            navigate(-2);
        }else{
            Swal.fire({
                position: "center",
                position: "center",
                icon: "error",
                title: "Please fill correct details",
                showConfirmButton: false,
                timer: 2000
            });
        }
        // Clear form after submission
    };

    return (
        <>
            <Container className='d-flex'>
                <Row className="d-flex align-content-center justify-content-center justify-content-md-center border">
                    <Col>
                        <img src={cancelOrderImg} alt='not found' style={{ width: '400px', height: '600px' }} />
                    </Col>
                    <Col className='border p-2 mt-2 border rounded' xs={12} md={6}>
                        <form onSubmit={handleSubmit}>
                            <h3 className="mb-4">Order Cancellation Form</h3>
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
                                type="date" // Uncomment this line to use a date picker
                                variant="outlined"
                                value={dateOfPurchase}
                                onChange={(e) => setDateOfPurchase(e.target.value)}
                                fullWidth
                                required
                                className="mb-3"
                                InputLabelProps={{
                                    shrink: true, // This makes sure the label stays above the input when a date is selected
                                }}
                            />
                            {/* <TextField
                                label="Order Total"
                                type="number"
                                variant="outlined"
                                value={orderTotal}
                                onChange={(e) => setOrderTotal(e.target.value)}
                                fullWidth
                                required
                                className="mb-3"
                            /> */}
                            {/* <TextField
                                label="Address"
                                variant="outlined"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                fullWidth
                                required
                                className="mb-3"
                            /> */}
                            {/* <Row>
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
                            </Row> */}
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
