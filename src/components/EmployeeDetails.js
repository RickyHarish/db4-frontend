import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EmployeeDetails = ({employee}) => {
  return (
    <Card className='my-3 p-3' >
        <Link to={`/employee`}>
            <Card.Img src={employee.img} className='emp-img' />
        </Link>
        <Card.Body>
            <Card.Title>
                <strong>{employee.name}</strong>
            </Card.Title>
            <Card.Text>
                {employee.email}
            </Card.Text>
            <Card.Text>
                {employee.dob}
            </Card.Text>
            <Card.Text>
                {employee.phone}
            </Card.Text>
            <Card.Text>
                {employee.role}
            </Card.Text>
            <Card.Text>
                {employee.department}
            </Card.Text>
            <Card.Text>
                {employee.Emp_ID}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default EmployeeDetails
