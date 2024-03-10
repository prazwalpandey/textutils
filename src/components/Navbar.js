import React, { useState } from "react";
import logo from "./assets/logo.png";
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
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={props.mode ? "" : "dark"}
    >
      <div className="container-fluid">
        <img src={logo} alt="Logo" className="navbar-logo" style={{width:"30px",height:"auto",margin:"10px"}}/>
        <a className="navbar-brand">
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
