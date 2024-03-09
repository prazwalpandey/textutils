import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch">
      <input
        className="form-check-input custom-switch"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        checked={isChecked}
        onChange={handleChange}
        style={isChecked ? { backgroundColor: 'grey', borderColor: 'grey', boxShadow: '0 0 0 0.3rem rgba(0, 0, 0, 0.1)' } : {}}
      />
    </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Set Title Here",
};
