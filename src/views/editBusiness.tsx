import React, { useState } from 'react';
import { 
  PersonCircle, 
  ThreeDotsVertical, CameraFill 
} from 'react-bootstrap-icons';
import Logo from '/Logo-reviewit.png'; // Ensure this path is correct


const EditBusinessPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: 'Tech Solutions Ltd',
    contact: '+237 623 456 789',
    location: 'Buea, SW Region',
    email: 'contact@techsolutions.cm',
    about: 'Leading software development and IT consultancy in the region.'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="d-flex flex-column vh-100 bg-white">
      
      {/* Top Header */}
      <div className="px-3 py-2 border-bottom d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
            <img src={Logo} className="logo" alt="Vite logo" style={{ width: '6rem', height: 'auto'}} />
        </div>
        <ThreeDotsVertical size={20} className="text-secondary" />
      </div>

      <div className="flex-grow-1 overflow-auto p-4">
        <h3 className="text-center mb-4" style={{ color: '#3b3b98' }}>Edit Business</h3>
        
        {/* Business Logo/Avatar Edit */}
        <div className="d-flex justify-content-center mb-4">
          <div className="position-relative">
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center bg-light shadow-sm"
              style={{ width: '120px', height: '120px', border: '2px solid #303395' }}
            >
              <PersonCircle size={80} className="text-secondary" />
            </div>
            <button 
              className="btn btn-sm btn-primary position-absolute bottom-0 end-0 rounded-circle p-2 shadow"
              style={{ backgroundColor: '#303395', border: 'none' }}
            >
              <CameraFill size={18} />
            </button>
          </div>
        </div>

        {/* Edit Form - Consistent with Create Business Template */}
        <form className="mx-auto" style={{ maxWidth: '400px' }}>
          {[
            { label: 'Name', name: 'name', type: 'text' },
            { label: 'Contact', name: 'contact', type: 'tel' },
            { label: 'Location', name: 'location', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
          ].map((field) => (
            <div className="row mb-3 align-items-center" key={field.name}>
              <label className="col-4 col-form-label fw-bold text-secondary small text-uppercase">
                {field.label}
              </label>
              <div className="col-8">
                <input 
                  type={field.type}
                  name={field.name}
                  className="form-control" 
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  style={{ borderRadius: '8px', border: '1px solid #ced4da', backgroundColor: '#fcfcfc' }}
                />
              </div>
            </div>
          ))}

          {/* About Section */}
          <div className="mb-4">
            <label className="fw-bold text-secondary small text-uppercase mb-2">About Business</label>
            <textarea
              name="about"
              className="form-control"
              rows={4}
              value={formData.about}
              onChange={handleChange}
              style={{ borderRadius: '15px', border: '1px solid #ced4da', resize: 'none' }}
            />
          </div>

          {/* Update Button */}
          <div className="text-center mt-4">
            <button 
              type="button" 
              className="btn px-5 py-2 fw-bold text-white shadow"
              style={{ backgroundColor: '#303395', borderRadius: '25px', fontSize: '1.2rem' }}
            >
              Update Business
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default EditBusinessPage;