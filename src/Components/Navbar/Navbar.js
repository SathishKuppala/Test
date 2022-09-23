import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nabvar py-3" style={{ backgroundColor: " #e3f2fd" }}>
      <div className="left">
        <img
          src="https://images.pexels.com/photos/12346579/pexels-photo-12346579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        ></img>
        <p>Sample</p>
      </div>
      <div className="right">
        <ul className="rightlist">
          <li>REQUEST A DEMO</li>
          <li>PRICING</li>
          <li>CONTACT US</li>
          <li>EVENTS</li>

          <button type="button" class="btn btn-success mx-3">
            SIGN IN
          </button>

          <Link to="/">
            <button type="button" class="btn btn-success mx-2">
              SIGN UP FOR FREE
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
