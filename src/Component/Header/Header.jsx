import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Header() {
  return (
    <div className="header">
      <div className="d-flex justify-content-end login">
        <a href="/login">
          <button className="btn btn-light sign-in">
            <FontAwesomeIcon className="user" icon={faUser} /> Sign In
          </button>
        </a>
      </div>
      <div className="head border">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid text-center">
            <a className="navbar-brand ms-4" href="#">
              <img src="/images/logo.png" alt="" />
            </a>
            <button
              className="navbar-toggler border-black"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 container justify-content-around">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Olympics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/athletes">
                    Athletes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sports">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/news">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contactus">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/gallery">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
