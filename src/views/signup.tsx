import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '/Logo-reviewit.png'; // Ensure this path is correct

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    names: '',
    country: '',
    region: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="card border-0 shadow-lg p-4 mt-5" style={{ maxWidth: '400px', borderRadius: '25px', width: '100%' }}>

        
        {/* Logo Section */}
        <div className="text-center mb-3">
          <div className="d-inline-block position-absolute" style={{ top: '-60px', left: '50%', transform: 'translateX(-50%)' }}>
              <img src={Logo} className="logo" alt="Vite logo" style={{ width: '10rem', height: 'auto'}} />
          </div>
        </div>

        <h3 className="text-center mt-4 mb-4" style={{ color: '#3b3b98', fontSize: '2.5rem' }}>Signup</h3>

        <form onSubmit={handleSubmit}>
          {/* Mapping through fields for cleaner code */}
          {[
            { label: 'Names', name: 'names', type: 'text' },
            { label: 'Country', name: 'country', type: 'text' },
            { label: 'Region', name: 'region', type: 'text' },
            { label: 'Phone number', name: 'phone', type: 'tel' },
            { label: 'Password', name: 'password', type: 'password' },
            { label: 'Confirm password', name: 'confirmPassword', type: 'password' },
          ].map((field) => (
            <div className="row mb-3 align-items-center" key={field.name}>
              <label className="col-4 col-form-label fw-bold text-secondary">
                {field.label}
              </label>
              <div className="col-7">
                <input 
                  type={field.type}
                  name={field.name}
                  className="form-control" 
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  style={{ 
                    borderRadius: '5px', 
                    border: '1px solid #ced4da',
                    backgroundColor: '#fcfcfc' 
                  }}
                />
              </div>
            </div>
          ))}

          {/* Signup Button */}
          <div className="text-center mt-4">
            <button 
              type="submit" 
              className="btn px-5 py-2 fw-bold text-white shadow"
              style={{ backgroundColor: '#303395', borderRadius: '25px', fontSize: '1.2rem' }}
            >
              Signup
            </button>
          </div>
        </form>

        {/* Decorative footer elements */}
        <hr className="mt-5 mb-2" style={{ opacity: 0.1 }} />
        <div>Already have an account?
          <Link to="/login">
            <div style={{ display: "inline" }}><a> Sign-up</a></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;