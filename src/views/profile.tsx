import React from 'react';
import { useNavigate } from 'react-router-dom';

import { 
  PersonCircle, 
  ThreeDotsVertical, ArrowRight 
} from 'react-bootstrap-icons';
import Logo from '/Logo-reviewit.png'; // Ensure this path is correct



const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing tokens)
    console.log("Logging out...");
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="d-flex flex-column vh-100 bg-white ">
      
      {/* Top Header */}
      <div className="px-3 py-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
            <img src={Logo} className="logo" alt="Vite logo" style={{ width: '6rem', height: 'auto'}} />
        </div>

        <div className="dropdown">
          <button 
            className="btn btn-link text-secondary p-0 border-0 shadow-none" 
            type="button" 
            id="profileDropdown" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            <ThreeDotsVertical size={20} />
          </button>
          <ul className="dropdown-menu dropdown-menu-end shadow border-0" aria-labelledby="profileDropdown" style={{ borderRadius: '12px' }}>
            <li>
              <button 
                className="dropdown-item py-2" 
                onClick={() => navigate('/edit-profile')}
              >
                Edit Profile
              </button>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <button 
                className="dropdown-item py-2 text-danger" 
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        {/* <ThreeDotsVertical size={20} className="text-secondary" /> */}
      </div>

      {/* Profile Info Section */}
      <div className="flex-grow-1 d-flex flex-column align-items-center pt-5 px-4">
        {/* Large Avatar Icon */}
        <div className="mb-3">
          <PersonCircle size={150} className="text-dark opacity-90" />
        </div>

        {/* User Details */}
        <h2 className="fw-normal mb-1">John Doe</h2>
        <p className="text-center text-dark mb-0 fs-5">
          This is the about of my profile
        </p>
        <p className="text-center text-dark fs-5">
          Lorem ipsum
        </p>

        {/* Business Reviews Action Button */}
        <div className="mt-5 w-100 d-flex justify-content-center">
          <button 
            className="btn btn-primary d-flex align-items-center justify-content-between px-4 py-2 shadow"
            style={{ 
              backgroundColor: '#303395', 
              border: 'none', 
              borderRadius: '25px',
              minWidth: '220px',
              fontSize: '1.2rem'
            }}
          >
            <span className="fw-bold">Business Reviews</span>
            <ArrowRight size={20} className="ms-3" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProfilePage;