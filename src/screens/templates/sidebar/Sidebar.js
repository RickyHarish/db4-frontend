import React from 'react';
import { FaUser, FaBriefcase, FaClipboardList, FaBullseye } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar({ setActiveScreen }) {
  return (
    <aside className="sidebar">
      <h5>Templates</h5>
        <p>All Templates </p>
        <p>Connects company templates</p>
        <hr/>
      <ul>
        <li onClick={() => setActiveScreen('productDevelopment')}>
          <FaClipboardList /> Product Development
        </li>
        <li onClick={() => setActiveScreen('productManagement')}>
          <FaBullseye /> Product Management
        </li>
        <li onClick={() => setActiveScreen('productManagement')}>
          <FaBullseye /> Work Management
        </li>
        <li onClick={() => setActiveScreen('okrs')}>
          <FaBriefcase /> OKRs
        </li>
        <li onClick={() => setActiveScreen('productManagement')}>
          <FaBullseye /> Content Production
        </li>
        <li onClick={() => setActiveScreen('productManagement')}>
          <FaBullseye /> Digital Transformation
        </li>
        <li onClick={() => setActiveScreen('productManagement')}>
          <FaBullseye /> Education
        </li>
        <li onClick={() => setActiveScreen('hr')}>
          <FaUser /> HR
        </li>
        <li onClick={() => setActiveScreen('productManagement')}>
          <FaBullseye /> Marketing
        </li>
        <li onClick={() => setActiveScreen('productManagement')}>
          <FaBullseye /> NGO
        </li>
        <li onClick={() => setActiveScreen('productManagement')}>
          <FaBullseye /> Operations
        </li>
        <li onClick={() => setActiveScreen('productManagement')}>
          <FaBullseye /> Sales and CRM
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
