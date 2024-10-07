import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
                <a
                  href="/"
                  className="text-decoration-none mb-0"
                  style={{ color: 'rgb(225,114,114)', fontFamily: "'Times New Roman', Times, serif" }}
                >
                  Movie
                </a>
              </h1>
              <h1>
                <a
                  href="/"
                  className="text-decoration-none mt-0"
                  style={{ color: 'rgb(225,114,114)', fontFamily: "'Times New Roman', Times, serif" }}
                >
                  Suggestion
                </a>
              </h1>
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarid"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarid" style={{ color: 'rgb(225,114,114)' }}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Reports
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </header>
    
  );
};

export default Navbar;