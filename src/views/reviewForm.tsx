import React, { useState } from 'react';
import { 
  StarFill, ThreeDotsVertical 
} from 'react-bootstrap-icons';
import Logo from '/Logo-reviewit.png'; // Ensure this path is correct

const ReviewForm: React.FC = () => {
  const [rating, setRating] = useState<number>(4);
  const [experience, setExperience] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Review Submitted:", { rating, experience });
  };

  return (
    <div className="d-flex flex-column vh-100 bg-white">
      
      {/* Top Header */}
      <div className="px-3 py-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
             <img src={Logo} className="logo" alt="Vite logo" style={{ width: '6rem', height: 'auto'}} />
        </div>
        <ThreeDotsVertical size={20} className="text-secondary" />
      </div>

      {/* Main Form Card */}
      <div className="flex-grow-1 d-flex justify-content-center align-items-center p-3">
        <div 
          className="card border-0 shadow-sm p-4 w-100" 
          style={{ 
            maxWidth: '400px', 
            borderRadius: '30px', 
            minHeight: '70vh',
            border: '1px solid #eee' 
          }}
        >
          <h2 className="text-center mb-4 mt-2" style={{ color: '#3b3b98', fontSize: '2.5rem' }}>
            Review Form
          </h2>

          <form onSubmit={handleSubmit} className="text-center">
            {/* Interactive Star Rating */}
            <div className="d-flex justify-content-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarFill
                  key={star}
                  size={40}
                  style={{ 
                    cursor: 'pointer',
                    color: star <= rating ? '#6c63ff' : '#ced4da', // Blueish-grey for active
                    transition: 'color 0.2s'
                  }}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>

            {/* Experience Textarea */}
            <div className="mb-5 px-2">
              <textarea
                className="form-control"
                placeholder="Describe Your experience"
                rows={5}
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                style={{ 
                  borderRadius: '15px', 
                  border: '1px solid #dee2e6',
                  resize: 'none',
                  backgroundColor: '#fff'
                }}
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn w-75 py-2 fw-bold text-white shadow"
              style={{ backgroundColor: '#303395', borderRadius: '12px', fontSize: '1.4rem' }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default ReviewForm;