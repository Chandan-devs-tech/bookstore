import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navItems">
      <h1 className="navbarHeading">Bookstore CMS</h1>
      <Link to="/" className="navitem">BOOKS</Link>
      <Link to="/categories" className="navitem bordered">CATEGORIES</Link>
    </div>
    <div className="icon">
      <FontAwesomeIcon icon={faUser} style={{ color: '#013ca2' }} />
    </div>
  </nav>
);

export default Navbar;
