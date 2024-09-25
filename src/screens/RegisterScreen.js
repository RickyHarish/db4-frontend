import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const RegisterScreen = () => {
  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails({
      ...employeeDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Details Submitted:", employeeDetails);
    // Handle form submission here (e.g., send to backend, etc.)
  };

  return (
    <Container>
      <h2 className="my-4">Employee Personal Details</h2>
      <Form onSubmit={handleSubmit}>
        {/* Name */}
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter full name"
            value={employeeDetails.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Email */}
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={employeeDetails.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Phone */}
        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={employeeDetails.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* DOB */}
        <Form.Group controlId="formDOB" className="mb-3">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            value={employeeDetails.dob}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Address */}
        <Form.Group controlId="formAddress" className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            name="address"
            placeholder="Enter address"
            rows={3}
            value={employeeDetails.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterScreen;
