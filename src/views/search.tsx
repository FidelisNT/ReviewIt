import React from 'react';
import { 
  Search, 
  StarFill, Star, Lock, ThreeDotsVertical 
} from 'react-bootstrap-icons';
import Logo from '/Logo-reviewit.png'; // Ensure this path is correct

const SearchPage: React.FC = () => {
  // Mock data for the Recent Businesses list
  const businesses = [
    { id: 1, name: 'Business1', date: '16/01/2026', rating: 4 },
    { id: 2, name: 'Business2', date: '16/01/2026', rating: 5 },
    { id: 3, name: 'Business3', date: '16/01/2026', rating: 5 },
  ];

  return (
    <div className="d-flex flex-column vh-100 bg-white">
      
      {/* Header Section with Logo and Options */}
      <div className="px-3 py-2 border-bottom d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
            <img src={Logo} className="logo" alt="Vite logo" style={{ width: '6rem', height: 'auto'}} />
        </div>
        <ThreeDotsVertical size={20} className="text-secondary" />
      </div>

      {/* Search Bar matching the design */}
      <div className="px-3 mt-3">
        <div className="input-group rounded-pill" style={{ backgroundColor: '#f3effa' }}>
          <span className="input-group-text border-0 bg-transparent ps-3">
            <Lock size={14} className="text-secondary" />
          </span>
          <input 
            type="text" 
            className="form-control border-0 bg-transparent py-2" 
            placeholder="+237 623 456 789"
          />
          <span className="input-group-text border-0 bg-transparent pe-3">
            <Search size={16} className="text-secondary" />
          </span>
        </div>
      </div>

      {/* Section Title */}
      <h4 className="text-center mt-3 mb-4 fw-normal" style={{ color: '#333' }}>
        Resent Businesses
      </h4>

      {/* Business List Area */}
      <div className="flex-grow-1 overflow-auto">
        {businesses.map((biz) => (
          <div key={biz.id} className="px-3 mb-4">
            <div className="d-flex align-items-start pb-3 border-bottom">
              {/* Thumbnail Placeholder */}
              <div 
                className="bg-light rounded-3 d-flex align-items-center justify-content-center me-3" 
                style={{ width: '80px', height: '80px', backgroundColor: '#ebe6f3' }}
              >
                <div className="text-secondary opacity-50" style={{ fontSize: '1.5rem' }}>💠</div>
              </div>

              {/* Business Info */}
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-start">
                  <h5 className="mb-1 fw-bold">{biz.name}</h5>
                </div>
                
                {/* Rating Stars */}
                <div className="mb-1 d-flex align-items-start">
                  {[...Array(5)].map((_, i) => (
                    i < biz.rating ? 
                    <StarFill key={i} size={14} className="text-secondary me-1" /> : 
                    <Star key={i} size={14} className="text-secondary me-1" />
                  ))}
                </div>
                
                <p className="small text-muted mb-0 d-flex align-items-start">Date: {biz.date}</p>
                <p className="small text-muted mb-0 d-flex align-items-start text-start">Supporting line text lorem ipsum dolo...</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SearchPage;