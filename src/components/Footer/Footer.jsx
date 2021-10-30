import React from "react";
import Logo from "../../logo";

const Footer = () => (
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <span className="text-muted">© 2021 Mohammad Reza, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3">
        <a className="text-muted" href="#" dideo-checked="true">
          <i className="bi bi-twitter"></i>
        </a>
      </li>
      <li className="ms-3">
        <a className="text-muted" href="#" dideo-checked="true">
          <i className="bi bi-instagram"></i>
        </a>
      </li>
      <li className="ms-3">
        <a className="text-muted" href="#" dideo-checked="true">
          <i className="bi bi-facebook"></i>
        </a>
      </li>
    </ul>
  </footer>
);
export default Footer;
