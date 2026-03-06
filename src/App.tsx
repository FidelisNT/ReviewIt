// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './views/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Footer from './views/footer';
import LoginPage from './views/login';
import SignupPage from './views/signup';
import HomePage from './views/home';
import ReviewsPage from './views/reviews';
// import SearchPage from './views/search';
import ReviewForm from './views/reviewForm';
import ProfilePage from './views/profile';
import EditProfilePage from './views/edtProfile';
import CreateBusinessPage from './views/createBusiness';
import EditBusinessPage from './views/editBusiness';
import Header from './views/header';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This is required for dropdowns

const AppContent = () => {
  const location = useLocation();
  
  // List of paths where the footer should NOT be shown
  const hideFooterPaths = ['/login', '/signup', '/create-business'];
  const showFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <div className="d-flex flex-column vh-100 vw-100 body">
      {showFooter && <Header />}
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* <Route path="/search" element={<SearchPage />} /> */}
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />☻
          <Route path="/edit-business" element={<EditBusinessPage />} />
          <Route path="/write-review" element={<ReviewForm />} />
          <Route path="/create-business" element={<CreateBusinessPage />} />

        </Routes>
      </div>
      {/* {showFooter && <Footer />} */}
    </div>
  );
};

function App() {
  // const greeting = import.meta.env.VITE_GREETING;
  // const [count, setCount] = useState(0);


  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  )
}

export default App
