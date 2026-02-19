import React, { useState } from 'react';
import { 
  House, Search, ChatSquareText, PersonCircle, 
  ThreeDotsVertical, CameraFill 
} from 'react-bootstrap-icons';
import Logo from '/Logo-reviewit.png'; // Ensure this path is correct

const EditProfilePage: React.FC = () => {
  const [profile, setProfile] = useState({
    names: 'John Doe',
    country: 'Cameroon',
    region: 'Southwest',
    phone: '+237 623 456 789',
    about: 'This is the about of my profile'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
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
        <h3 className="text-center mb-4" style={{ color: '#3b3b98' }}>Edit Profile</h3>
        
        {/* Profile Image Edit */}
        <div className="d-flex justify-content-center mb-4">
          <div className="position-relative">
            <PersonCircle size={120} className="text-dark opacity-90" />
            <button 
              className="btn btn-sm btn-primary position-absolute bottom-0 end-0 rounded-circle p-2 shadow"
              style={{ backgroundColor: '#303395', border: 'none' }}
            >
              <CameraFill size={18} />
            </button>
          </div>
        </div>

        {/* Edit Form - Using Signup style */}
        <form className="mx-auto" style={{ maxWidth: '400px' }}>
          {[
            { label: 'Names', name: 'names', type: 'text' },
            { label: 'Country', name: 'country', type: 'text' },
            { label: 'Region', name: 'region', type: 'text' },
            { label: 'Phone', name: 'phone', type: 'tel' },
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
                  value={(profile as any)[field.name]}
                  onChange={handleChange}
                  style={{ borderRadius: '8px', border: '1px solid #ced4da' }}
                />
              </div>
            </div>
          ))}

          {/* About Section */}
          <div className="mb-4">
            <label className="fw-bold text-secondary mb-2">About Me</label>
            <textarea
              name="about"
              className="form-control"
              rows={3}
              value={profile.about}
              onChange={handleChange}
              style={{ borderRadius: '8px' }}
            />
          </div>

          {/* Save Button */}
          <div className="text-center mt-4">
            <button 
              type="button" 
              className="btn px-5 py-2 fw-bold text-white shadow"
              style={{ backgroundColor: '#303395', borderRadius: '25px', fontSize: '1.2rem' }}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default EditProfilePage;