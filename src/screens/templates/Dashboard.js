import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import Hr from './hrScreen/Hr';
import OKRs from './OKRsScreen/OKRs';
import ProductDevelopment from './productDevelopment/ProductDevelopment';
import WorkManagement from './workManagement/WorkManagement';
import ProductManagement from './productManagement/ProductManagement';
import './Dashboard.css';

function Dashboard() {
  // State to manage the active screen
  const [activeScreen, setActiveScreen] = useState('employeeOnboarding');

  // Function to render the correct component based on the active screen
  const renderScreen = () => {
    switch (activeScreen) {
      case 'hr':
        return <Hr />;
      case 'okrs':
        return <OKRs />;
      case 'productDevelopment':
        return <ProductDevelopment />;
      case 'productManagement':
        return <ProductManagement />;
      default:
        return <WorkManagement />;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar setActiveScreen={setActiveScreen} />
      <div className="main-content">
        {renderScreen()}
      </div>
    </div>
  );
}

export default Dashboard;
