import React, { useState } from "react";


function Aboutus(props) {
  return (
    <div className="flex" style={{height:"100%",width:"65%"}}>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item" style={props.mode ?{}:{background: "#474848",borderColor: "white", color: "white" }}>
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              style={{background:"#d6d6d6",boxShadow:"none"}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              About TEXT Utilities
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <p>
                Welcome to TEXT Utilities, your one-stop solution for all your
                text manipulation needs. Whether you need to convert text to
                lowercase, generate random text, count characters, or capitalize
                words, we've got you covered. Our user-friendly tools make text
                processing effortless and efficient.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.mode ?{}:{background: "#474848",borderColor: "white", color: "white" }}>
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
              style={{background:"#d6d6d6",boxShadow:"none"}}
            >
              Meet the Developer - Prazwal Stark
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              Prazwal Stark is the creative mind behind TEXT Utilities. With a
              passion for coding and a keen eye for detail, Prazwal envisioned a
              platform that simplifies text manipulation tasks for users across
              the globe. Armed with expertise in web development and a
              dedication to innovation, Prazwal ensures that TEXT Utilities
              remains cutting-edge and user-friendly. Get to know more about
              Prazwal's journey and his commitment to delivering excellence in
              text utilities.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={props.mode ?{}:{background: "#474848",borderColor: "white", color: "white" }}>
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
              style={{background:"#d6d6d6",boxShadow:"none"}}
            >
              Our Vision
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              At TEXT Utilities, our mission is to empower users with powerful
              yet intuitive tools for text manipulation. We strive to streamline
              text processing tasks, saving our users time and effort. Our
              vision is to become the go-to platform for anyone working with
              text, providing a comprehensive suite of utilities that cater to
              diverse needs. Join us on our journey as we continue to innovate
              and enhance the way you interact with text.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
