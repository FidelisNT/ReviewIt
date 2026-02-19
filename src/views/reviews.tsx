import React from 'react';
import { 
  House, Search, ChatSquareText, PersonCircle, 
  StarFill, Star, Heart, ThreeDotsVertical 
} from 'react-bootstrap-icons';
import Logo from '/Logo-reviewit.png'; // Ensure this path is correct

const ReviewsPage: React.FC = () => {
  // Mock data for the reviews list
  const reviews = [
    { id: 1, user: '[User1]', date: '16/01/2026', rating: 4 },
    { id: 2, user: '[User2]', date: '16/01/2026', rating: 5 },
    { id: 3, user: '[user3]', date: '16/01/2026', rating: 5 },
  ];

  return (
    <div className="d-flex flex-column vh-100 bg-white">
      
      {/* Header Section */}
      <div className="px-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
             <img src={Logo} className="logo" alt="Vite logo" style={{ width: '6rem', height: 'auto'}} />
        </div>
        <ThreeDotsVertical size={20} className="text-secondary" />
      </div>

      {/* Profile/Business Header Area */}
      <div className="text-center pb-4 px-3">
        <div className="mb-2">
          <PersonCircle size={100} className="text-dark" />
        </div>
        <h3 className="fw-bold mb-1">[Business Name]</h3>
        <p className="text-dark mb-0">This is the about of my profile</p>
        <p className="text-dark">Lorem ipsum</p>
      </div>

      {/* Reviews Section Title */}
      <div className="py-2 text-center" style={{ backgroundColor: '#fcf8ff' }}>
        <h4 className="mb-0 fw-normal">Reviews</h4>
      </div>

      {/* Scrollable Reviews List */}
      <div className="flex-grow-1 overflow-auto mt-2">
        {reviews.map((rev) => (
          <div key={rev.id} className="px-3 mb-4">
            <div className="d-flex align-items-start pb-3 border-bottom">
              {/* Reviewer Avatar Placeholder */}
              <div 
                className="bg-light rounded-3 d-flex align-items-center justify-content-center me-3" 
                style={{ width: '80px', height: '80px', backgroundColor: '#ebe6f3' }}
              >
                <div className="text-secondary opacity-50" style={{ fontSize: '1.5rem' }}>💠</div>
              </div>

              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-start d-flex align-items-start">
                  <h5 className="mb-1 fw-bold">{rev.user}</h5>
                  <Heart className="text-secondary" size={18} />
                </div>
                
                {/* Star Rating */}
                <div className="mb-1 d-flex align-items-start">
                  {[...Array(5)].map((_, i) => (
                    i < rev.rating ? 
                    <StarFill key={i} size={14} className="text-secondary me-1" /> : 
                    <Star key={i} size={14} className="text-secondary me-1" />
                  ))}
                </div>
                
                <p className="small text-muted mb-0 d-flex align-items-start">Date: {rev.date}</p>
                <p className="small text-muted mb-0 d-flex align-items-start">Supporting line text lorem ipsu...</p>
              </div>
            </div>
          </div>
        ))}
      </div>

     </div>
   );
};

export default ReviewsPage;