// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './Assets/logo.png';

function NavBar({ showLoginRegisterLinks }) {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <img className="logo" src={logo} alt="logo" />
          <div className="nav-logo" onClick={handleMenuToggle}>
            Expresso
            <i className="fas fa-code"></i>
          </div>

          <ul className={isMenuVisible ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName=""
                className="nav-links"
                onClick={handleMenuToggle}
              >
                Home
              </NavLink>
            </li>
            {showLoginRegisterLinks && (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    activeClassName=""
                    className="nav-links"
                    onClick={handleMenuToggle}
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/register"
                    activeClassName=""
                    className="nav-links"
                    onClick={handleMenuToggle}
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
            {!showLoginRegisterLinks && (
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/events"
                    activeClassName=""
                    className="nav-links"
                    onClick={handleMenuToggle}
                  >
                    Events
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/team"
                    activeClassName=""
                    className="nav-links"
                    onClick={handleMenuToggle}
                  >
                    Team
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/art"
                    activeClassName=""
                    className="nav-links"
                    onClick={handleMenuToggle}
                  >
                    Art
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/literature"
                    activeClassName=""
                    className="nav-links"
                    onClick={handleMenuToggle}
                  >
                    Literature
                  </NavLink>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName=""
                className="nav-links"
                onClick={handleMenuToggle}
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleMenuToggle}>
            <i className={isMenuVisible ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
