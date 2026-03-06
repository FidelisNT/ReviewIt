import React from 'react';
import { NavLink } from 'react-router-dom';

// import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="d-flex flex-column vh-100 bg-white main" style={{marginTop: '70px'}}>
      
      {/* Hero Section with Gradient */}
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <svg aria-hidden="true" className="bd-placeholder-img" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <div className="container">
                    <div className="carousel-caption text-start">
                        <h1>Getting started</h1>
                        <p className="opacity-75">
                            Create an account on ReviewIt and leave a review on businesses
                        </p>
                        <p>
                            <NavLink className="btn btn-lg btn-primary" to="/signin">
                                <div>Sign up today</div>
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <svg aria-hidden="true" className="bd-placeholder-img" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <div className="container">
                    <div className="carousel-caption">
                        <h1>View vendor reviews</h1>
                        <p>
                            Drop a review on different vendors you've interacted with
                        </p>
                        <p><a className="btn btn-lg btn-primary" href="#search">Review vendor</a></p>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <svg aria-hidden="true" className="bd-placeholder-img" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <div className="container">
                    <div className="carousel-caption text-end">
                        <h1>Create vendor account</h1>
                        <p>
                            Create a vendor account now so customers can start dropping reviews of your services
                        </p>
                        <p>
                            <NavLink className="btn btn-lg btn-primary" to="/create-business">
                                <div>Create Business</div>
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>

      {/* Main Content / Card Section */}
      <div className="container" style={{height: 'auto'}}>
        {/* <!-- Three columns of text below the carousel --> */}
        <div className="row">
            <div className="col-lg-4">
                <svg aria-label="Placeholder" className="bd-placeholder-img rounded-circle" height="140" preserveAspectRatio="xMidYMid slice" role="img" width="140" xmlns="http://www.w3.org/2000/svg">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
            </svg>
            <h2 className="fw-normal">Sign In</h2>
            <p>
                With your very own account, you are able to drop reviews of your experience with vendors you've interacted with,
                commenting if their services are good, and if they are legitimate or fraudulent
            </p>
              <p>
                  <a className="btn btn-secondary" href="#">Sign in</a>
                </p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-4">
                <svg aria-label="Placeholder" className="bd-placeholder-img rounded-circle" height="140" preserveAspectRatio="xMidYMid slice" role="img" width="140" xmlns="http://www.w3.org/2000/svg">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <h2 className="fw-normal">Reviews</h2>
                <p>
                    Get to know which vendor offering the goods or services you're looking for is
                    legitimate or fraudulent from one place
                </p>
                <p>
                <a className="btn btn-secondary" href="#">View reviews »</a>
                </p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
            <div className="col-lg-4">
                <svg aria-label="Placeholder" className="bd-placeholder-img rounded-circle" height="140" preserveAspectRatio="xMidYMid slice" role="img" width="140" xmlns="http://www.w3.org/2000/svg">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect>
                </svg>
                <h2 className="fw-normal">Register Business</h2>
                <p>
                    As a vendor, your customers satisfaction is a key requirement for the growth of your business.
                    Create a vendor account now so your reviews can speak for your business.
                </p>
                <p>
                    <a className="btn btn-secondary" href="#">Create Vendor</a>
                </p>
            </div>
            {/* <!-- /.col-lg-4 --> */}
        </div>
        {/* <!-- /.row --> */}
    </div>

    </div>
  );
};

export default HomePage;