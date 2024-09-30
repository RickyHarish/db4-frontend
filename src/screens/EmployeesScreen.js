import React, { useState } from 'react';
import EmployeeDetails from '../components/EmployeeDetails';
import { Modal, Button, Form } from 'react-bootstrap'; // Importing from React-Bootstrap

const EmployeesScreen = () => {
  const [employeesData, setEmployeesData] = useState([
    {
      name: 'Harish',
      email: 'harishad@gmail.com',
      dob: '1998-04-28',
      img: 'https://res.cloudinary.com/djestqza3/image/upload/v1727163192/Passport_Size_Photo_bxxoyj.jpg',
      phone: '9876543210',
      location: 'Chennai',
      role: 'ASSOCIATE SOFTWARE ENGINEER',
      department: 'Development',
      Emp_ID: '123456',
    },
    {
      name: 'Manjunath',
      email: 'manjunathg@gmail.com',
      img: 'https://media.gettyimages.com/id/985138674/photo/portrait-of-smiling-mid-adult-man-wearing-t-shirt.jpg?s=612x612&w=gi&k=20&c=DhdnAqqXmNwPVWnLLtj7-ntysrj1oLMBdf21YyKJZk0=',
      dob: '2001-01-01',
      phone: '9876598765',
      location: 'Chennai',
      role: 'ASSOCIATE SOFTWARE ENGINEER',
      department: 'Development',
      Emp_ID: '123123',
    },
    {
      name: 'Dinesh',
      email: 'dinesha@gmail.com',
      img: 'https://res.cloudinary.com/djestqza3/image/upload/v1727163593/WhatsApp_Image_2024-09-24_at_1.05.37_PM_zhzlyx.jpg',
      dob: '1998-02-02',
      phone: '9876541234',
      location: 'Chennai',
      role: 'ASSOCIATE SOFTWARE ENGINEER',
      department: 'Development',
      Emp_ID: '123432',
    },
    {
      name: 'Subikshan',
      email: 'subikshanb@gmail.com',
      img: 'https://res.cloudinary.com/djestqza3/image/upload/v1727163581/passport_size_photo_copy_owmbto.jpg',
      dob: '2000-03-03',
      phone: '8787989801',
      location: 'Chennai',
      role: 'ASSOCIATE SOFTWARE ENGINEER',
      department: 'Development',
      Emp_ID: '567890',
    },
  ]);

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    dob: '',
    img: '',
    phone: '',
    location: '',
    role: '',
    department: '',
    Emp_ID: '',
  });

  const [showModal, setShowModal] = useState(false); // For showing and hiding the modal
  const [imagePreview, setImagePreview] = useState(null);

  // Handle image upload and convert it to base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewEmployee((prevData) => ({
        ...prevData,
        img: reader.result, // Save the base64-encoded image
      }));
      setImagePreview(reader.result); // Set image preview
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployeesData((prevData) => [...prevData, { ...newEmployee, Emp_ID: Date.now().toString() }]);
    setShowModal(false); // Hide the modal after adding the employee
    setNewEmployee({
      name: '',
      email: '',
      dob: '',
      img: '',
      phone: '',
      location: '',
      role: '',
      department: '',
      Emp_ID: '',
    });
  };

  return (
    <div>
      <h1>Employees List</h1>

      {/* Button to show the modal */}
      <div style={{textAlign:"right"}}>
      <Button variant="primary" style={{backgroundColor:"#457d88f6", border:"none"}}  onClick={() => setShowModal(true)}>
        +Add New Employee
      </Button>
      </div>
      {/* React-Bootstrap Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className='formName'>
              <Form.Label className='modelLabel' >Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                className='modalInput'
                placeholder="Enter name"
                value={newEmployee.name}
                onChange={handleChange}
                required
              />
            </Form.Group >
            <Form.Group controlId="formEmail" className='formName'>
              <Form.Label className='modelLabel'>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                className='modalInput'
                placeholder="Enter email"
                value={newEmployee.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDob" className='formName'>
              <Form.Label className='modelLabel'>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                className='modalInput'
                value={newEmployee.dob}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formImg" className='formName'>
              <Form.Label className='modelLabel'>Image URL</Form.Label>
              <Form.Control
                type="file"
                name="img"
                className='modalImgInput'
                onChange={handleImageUpload}
                required
              />
            </Form.Group>
            {/* Image Preview */}
            {imagePreview && (
              <div style={{ marginBottom: '15px'}}>
                <img
                  src={imagePreview}
                  alt="Employee pic"
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
              </div>
            )}
            <Form.Group controlId="formPhone" className='formName'>
              <Form.Label className='modelLabel'>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                className='modalInput'
                value={newEmployee.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formLocation" className='formName' >
              <Form.Label className='modelLabel'>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                placeholder="Enter location"
                className='modalInput'
                value={newEmployee.location}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formRole" className='formName'>
              <Form.Label className='modelLabel'>Role</Form.Label>
              <Form.Control
                type="text"
                name="role"
                placeholder="Enter role"
                className='modalInput'
                value={newEmployee.role}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDepartment" className='formName'>
              <Form.Label className='modelLabel'>Department</Form.Label>
              <Form.Control
                type="text"
                name="department"
                className='modalInput'
                placeholder="Enter department"
                value={newEmployee.department}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Employee
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Employee list */}
      <ul style={{ listStyleType: 'none' }}>
        {employeesData.map((emp) => (
          <li key={emp.Emp_ID}>
            <EmployeeDetails employee={emp} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeesScreen;
