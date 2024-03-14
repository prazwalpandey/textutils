import React, { useState } from "react";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // const [isChecked, setIsChecked] = useState(false);

  // const handleChange = () => {
  //   setIsChecked(!isChecked);
  // };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={props.mode ? "" : "dark"}
    >
      <div className="container-fluid">
        <img src={logo} alt="Logo" className="navbar-logo" style={{width:"30px",height:"auto",margin:"10px"}}/>
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input custom-switch"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
              style={
                !props.mode
                  ? {
                      backgroundColor: "grey",
                      borderColor: "grey",
                      boxShadow: "0 0 0 0.3rem rgba(0, 0, 0, 0.1)",
                    }
                  : {}
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
