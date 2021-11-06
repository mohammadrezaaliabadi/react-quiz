import React, { useState } from "react";
import { useHistory } from "react-router";
import Logo from "../../logo";
import "./Login.scss";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleSignUp = () => {
    setToken({ token: { email, name } });
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">
            <Logo /> It is quiz!
          </h1>
          <p className="col-lg-10 fs-4">
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 box">
            <div className="mb-3 text-center">
              <input
                type="email"
                className="input-text-my"
                id="floatingInput"
                placeholder="Email"
                onChange={handleChangeEmail}
              />
            </div>
            <div className="mb-3 text-center">
              <input
                type="text"
                className="input-text-my"
                id="floatingText"
                placeholder="Name"
                onChange={handleChangeName}
              />
            </div>
            <button
              onClick={handleSignUp}
              className="w-100 btn-my"
              type="submit"
            >
              Start
            </button>

            <hr className="my-4" />
            <small className="text-muted">
              By clicking Sign up, you agree to the terms of use.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
