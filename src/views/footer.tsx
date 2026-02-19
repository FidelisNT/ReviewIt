import React from 'react';
import { NavLink } from 'react-router-dom';
import { House, Search, ChatSquareText, PersonCircle } from 'react-bootstrap-icons';

const Footer: React.FC = () => {
  // Helper to define styles for active vs inactive tabs
  const navItemStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? '#0d6efd' : '#6c757d', // Primary blue if active, grey if not
    borderTop: isActive ? '4px solid #0d6efd' : '4px solid transparent',
    paddingTop: '4px',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  });

  return (
    <div className="bg-white border-top py-2 px-3 mt-auto">
      <div className="d-flex justify-content-around align-items-center text-center">
        
        {/* Home Tab */}
        <NavLink to="/" style={navItemStyle}>
          <House size={24} />
          <div style={{ fontSize: '0.75rem' }}>Home</div>
        </NavLink>

        {/* Search Tab */}
        <NavLink to="/search" style={navItemStyle}>
          <Search size={22} />
          <div style={{ fontSize: '0.75rem' }}>Search</div>
        </NavLink>

        {/* Reviews Tab */}
        <NavLink to="/reviews" style={navItemStyle}>
          <ChatSquareText size={22} />
          <div style={{ fontSize: '0.75rem' }}>Reviews</div>
        </NavLink>

        {/* Profile Tab */}
        <NavLink to="/profile" style={navItemStyle}>
          <PersonCircle size={22} />
          <div style={{ fontSize: '0.75rem' }}>Profile</div>
        </NavLink>
        
      </div>
    </div>
  );
};

export default Footer;