import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '/Logo-reviewit.png'; // Ensure this path is correct

const LoginPage: React.FC = () => {
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { phone, password });
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="card border-0 shadow-lg p-4" style={{ maxWidth: '400px', borderRadius: '25px', width: '100%' }}>
        
        {/* Logo Section */}
        <div className="text-center mb-3">
          <div className="d-inline-block position-absolute" style={{ top: '-60px', left: '50%', transform: 'translateX(-50%)' }}>
             <img src={Logo} className="logo" alt="Vite logo" style={{ width: '10rem', height: 'auto'}} />
          </div>
        </div>

        <h3 className="text-center mt-4" style={{ color: '#3b3b98' }}>Login</h3>

        <form onSubmit={handleSubmit}>
          {/* Phone Number Input */}
          <div className="row mb-3 align-items-center">
            <label className="col-4 col-form-label fw-bold text-secondary">Phone Number</label>
            <div className="col-8">
              <input 
                type="tel" 
                className="form-control" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ borderRadius: '5px', border: '1px solid #ced4da' }}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="row mb-4 align-items-center">
            <label className="col-4 col-form-label fw-bold text-secondary">Password</label>
            <div className="col-8">
              <input 
                type="password" 
                className="form-control" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ borderRadius: '5px', border: '1px solid #ced4da' }}
              />
            </div>
          </div>

          {/* Login Button */}
          <div className="text-center">
            <button 
              type="submit" 
              className="btn px-5 py-2 fw-bold text-white shadow-sm"
              style={{ backgroundColor: '#303395', borderRadius: '20px' }}
            >
              Login
            </button>
          </div>
        </form>

        {/* Decorative footer line like in the image */}
        <hr className="mt-5 mb-2" />
        <div>Don't have an account? 
          <Link to="/signup">
            <div style={{ display: "inline" }}><a> Sign-in</a></div>
          </Link></div>
      </div>
    </div>
  );
};

export default LoginPage;