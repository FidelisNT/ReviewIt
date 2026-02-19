import React, { useState } from 'react';
import Logo from '/Logo-reviewit.png'; // Ensure this path is correct

const CreateBusinessPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    email: '',
    about: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Business Data Submitted:", formData);
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div 
        className="card shadow-lg p-4 position-relative" 
        style={{ 
          maxWidth: '420px', 
          borderRadius: '30px', 
          width: '100%',
        }}
      >
        
        {/* Logo Section */}
        <div className="text-center position-absolute start-50 translate-middle" style={{ marginTop: '-10px' }}>
            <h2 className="fw-bold" style={{ color: '#3b3b98', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
             <img src={Logo} className="logo" alt="Vite logo" style={{ width: '10rem', height: 'auto'}} />
            </h2>
        </div>

        <h3 className="text-center mt-4 mb-4" style={{ color: '#3b3b98', fontSize: '2rem' }}>
          Create Business
        </h3>

        <form onSubmit={handleSubmit}>
          {/* Mapping Business Fields */}
          {[
            { label: 'Name', name: 'name', type: 'text' },
            { label: 'Contact', name: 'contact', type: 'tel' },
            { label: 'Location', name: 'location', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
          ].map((field) => (
            <div className="row mb-3 align-items-center" key={field.name}>
              <label className="col-4 col-form-label fw-bold text-secondary">
                {field.label}
              </label>
              <div className="col-8">
                <input 
                  type={field.type}
                  name={field.name}
                  className="form-control" 
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  style={{ 
                    borderRadius: '8px', 
                    border: '1px solid #ced4da',
                    backgroundColor: '#fcfcfc' 
                  }}
                />
              </div>
            </div>
          ))}

          {/* About Field (Textarea) */}
          <div className="row mb-4">
            <label className="col-4 col-form-label fw-bold text-secondary">About</label>
            <div className="col-8">
              <textarea
                name="about"
                className="form-control"
                rows={3}
                value={formData.about}
                onChange={handleChange}
                style={{ borderRadius: '8px', border: '1px solid #ced4da' }}
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center mt-4">
            <button 
              type="submit" 
              className="btn px-5 py-2 fw-bold text-white shadow"
              style={{ backgroundColor: '#303395', borderRadius: '25px', fontSize: '1.2rem' }}
            >
              Register Business
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default CreateBusinessPage;