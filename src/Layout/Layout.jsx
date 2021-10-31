import React, { useReducer } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AnswerContext from "../context/AnswerContext";
import { DATA_ANSWER } from "../data/data";
import AnswerReducer from "../reducer/AnswerReducer";

const Layout = ({ children }) => {
  const answers = JSON.parse(localStorage.getItem("DATA_ANSWER"));
  const [state, dispatchAnswer] = useReducer(AnswerReducer, {
    answers: answers || DATA_ANSWER,
  });
  return (
    <AnswerContext.Provider value={{ answers: state.answers, dispatchAnswer }}>
      <div className="row justify-content-center">
        <div className="col-12">
          <Header />
        </div>
        <div className="col-12">{children}</div>
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </AnswerContext.Provider>
  );
};

export default Layout;
