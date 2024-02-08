import React from "react";
import { NavLink } from "react-router-dom";
import AllPage from "../comp/AllPage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <>
      {/*  all pages  */}
      <AllPage />
      {/* end all pages  */}
      <div className="d-flex ps-4 pe-4 justify-content-between">
        <div>Contact Us</div>
        <div>
          <NavLink className="text-dark" to="/">
            Home
          </NavLink>
        </div>
      </div>

      {/* start Contact Us */}
      <div className="ps-4 pe-4 d-flex gap-4 ContactDsplay">
        <div className="ContactIn">
          <h2>Contact Us</h2>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Phone number" />
          <input placeholder="comment" />
          <button>SEND</button>
        </div>
        <div className="ContactMe">
          <h2>Get In Touch With Us</h2>
          <div>
            <div className="ContactIcon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <p>33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105</p>
            </div>
          </div>
          <div>
            <div className="ContactIcon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <p>(+91)7-723-4608</p>
            </div>
          </div>
          <div>
            <div className="ContactIcon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <p>Electbox@exampledemo.com</p>
            </div>
          </div>
          <div>
            <div className="ContactIcon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <p>Monday – Friday 10 AM – 8 PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
