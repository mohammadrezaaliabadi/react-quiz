import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../logo";

const Header = () => (
  <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <Link
      to="/"
      className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none"
      dideo-checked="true"
    >
      <Logo />
    </Link>
    <div className="col-md-3 text-end">
      <button type="button" className="btn-my">
        Logout
      </button>
    </div>
  </header>
);
export default Header;
