import './footer.css';
import { NavLink } from 'react-router-dom';
import Logo from '/Logo-reviewit.svg'; // Ensure this path is correct

const Header = () => {
    const navItemStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? '#0d6efd' : '#6c757d', // Primary blue if active, grey if not
    // paddingTop: '4px',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  });
  return (
    <header>
        {/* Fixed navbar */}
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light">
        <div className="container-fluid">
            <div className="d-flex align-items-center">
                <img src={Logo} className="logo" alt="Vite logo" style={{ width: '4rem', height: 'auto', marginRight: '20px'}} />
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" style={navItemStyle}>
                    <div>Home</div>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/profile" style={navItemStyle}>
                    <div>Profile</div>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="btn btn-primary mx-5 fw-bold" to="/login">
                    <div>Login</div>
                    </NavLink>
                </li>
                
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" id='search' type="search" placeholder="6 78 900 123" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit">
                Search
                </button>
            </form>
            </div>
        </div>
        </nav>
    </header>
    );
};

export default Header;