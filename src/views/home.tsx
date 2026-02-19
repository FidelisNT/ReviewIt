import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="d-flex flex-column vh-100 bg-light">
      
      {/* Hero Section with Gradient */}
      <div 
        className="text-white text-center p-5" 
        style={{ 
          background: 'linear-gradient(135deg, #1e2a78 0%, #ff4b2b 100%)',
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px'
        }}
      >
        <h1 className="fw-bold mt-4" style={{ fontSize: '2.5rem' }}>
          REVIEWIT, <br /> 
          <span style={{ fontSize: '1.8rem' }}>Your Online Vendor Validator</span>
        </h1>
        
        <div className="d-flex justify-content-center gap-3 mt-4 mb-3">
          <Link to="/signup" className="btn btn-light text-primary fw-bold px-4 py-2" style={{ borderRadius: '10px' }}>
            Start Reviewing
          </Link>
          <a href="#body" className="btn btn-outline-light px-4 py-2" style={{ borderRadius: '10px' }}>Learn More</a>
        </div>
      </div>

      {/* Main Content / Card Section */}
      <div className="flex-grow-1 p-4" id='body'>
        <div className="card border-0 shadow-sm mx-auto" style={{ maxWidth: '400px', borderRadius: '15px' }}>
          <div className="p-3">
            {/* Placeholder Image Box */}
            <div 
              className="bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center mb-3" 
              style={{ height: '200px', borderRadius: '10px' }}
            >
              <img 
                src="https://via.placeholder.com/150" 
                alt="placeholder" 
                style={{ opacity: 0.3, width: '80px' }} 
              />
            </div>
            
            <h4 className="fw-bold mb-2">Title</h4>
            <p className="text-muted mb-4">
              Body text for whatever you'd like to say. Add main takeaway points, 
              quotes, anecdotes, or even a very short story.
            </p>
            
            <button className="btn btn-secondary w-100 py-2 text-dark fw-bold border-0" style={{ backgroundColor: '#b0b0b0' }}>
              Button
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;