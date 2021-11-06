import React from "react";
import { useHistory, useLocation } from "react-router";
import useToken from "../../hooks/useToken";
import Logo from "../../logo";
import "./Result.scss";
const Result = () => {
  const token = useToken();
  const history = useHistory();
  const location = useLocation();
  const handleAgain = () => {
    history.push("/");
  };
  const handleLogout = () => {
    token.deleteToken();
    window.location.reload();
  };
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">
          <Logo /> Thank you!
        </h1>
        <div className="col-lg-6 mx-auto">
          {!location.state.finish && <h3>Time is Over!💔</h3>}
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              onClick={handleAgain}
              type="button"
              className="btn-my btn-lg px-4 gap-3"
            >
              Again
            </button>
            <button
              onClick={handleLogout}
              type="button"
              className="btn-my btn-lg px-4 gap-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div id="background-wrap">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
      </div>
    </>
  );
};

export default Result;
