import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const isActiveCallback = ({ isActive }) => {
    if (isActive) {
      return "link link-seleccionado";
    } else {
      return "link";
    }
  };
  
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-title">FakeStore</h2>
        <nav className="navbar-links">
          <NavLink to="/" className={isActiveCallback}>Inicio</NavLink>
          <NavLink to="/contact" className={isActiveCallback}>Contacto</NavLink>
          <NavLink to="/registro" className={isActiveCallback}>Registro</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
