import React, { useState } from 'react';
import EmployeeDetails from '../components/EmployeeDetails';

const EmployeesScreen = () => {
  const [employeesData, setEmployeesData] = useState([
    {
      name: 'Harish',
      email: 'harishad@gmail.com',
      dob: '28-04-1998',
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
      dob: '01-01-2001',
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
      dob: '02-02-1998',
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
      dob: '03-03-2000',
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

  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adding a new employee with unique Emp_ID
    setEmployeesData((prevData) => [...prevData, { ...newEmployee, Emp_ID: Date.now().toString() }]);
    setShowForm(false); // Hide the form after adding the employee
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
      <h1>Employee List</h1>
      
      {/* Button to show/hide the form */}
      <button onClick={() => setShowForm(!showForm)}>{showForm ? 'Cancel' : 'Add New Employee'}</button>
      
      {/* Form to add new employee */}
      {showForm && (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newEmployee.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newEmployee.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={newEmployee.dob}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            value={newEmployee.img}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={newEmployee.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newEmployee.location}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={newEmployee.role}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={newEmployee.department}
            onChange={handleChange}
            required
          />
          <button type="submit">Add Employee</button>
        </form>
      )}
      
      {/* Display the list of employees */}
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
