import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function PaymentForm() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected payment option:', selectedOption);
    // Handle form submission logic here (e.g., send data to backend)
  };

  return (
    <div className="container">
      <h2>Choose Payment Mode</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Check
            type="radio"
            label="Cash on Delivery"
            name="paymentOption"
            value="cash"
            checked={selectedOption === 'cash'}
            onChange={handleOptionChange}
          />
          <Form.Check
            type="radio"
            label="Card"
            name="paymentOption"
            value="card"
            checked={selectedOption === 'card'}
            onChange={handleOptionChange}
          />
          <Form.Check
            type="radio"
            label="Online UPI"
            name="paymentOption"
            value="upi"
            checked={selectedOption === 'upi'}
            onChange={handleOptionChange}
          />
          <Form.Check
            type="radio"
            label="Through Bank Account"
            name="paymentOption"
            value="bank"
            checked={selectedOption === 'bank'}
            onChange={handleOptionChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Proceed
        </Button>
      </Form>
    </div>
  );
}

export default PaymentForm;
