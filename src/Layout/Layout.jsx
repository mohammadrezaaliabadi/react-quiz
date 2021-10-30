import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = ({ children }) => {
  const answers = JSON.parse(localStorage.getItem("questions"));
  return (
    <div className="row justify-content-center">
      <div className="col-12">
        <Header />
      </div>
      <div className="col-12">{children}</div>
      <div className="col-12">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
