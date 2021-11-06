import React, { useContext } from "react";
import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import AnswerContext from "../../context/AnswerContext";

import Logo from "../../logo";
import { ANSWER_ACTION_TYPE } from "../../reducer/AnswerReducer";
import ProgressBar from "../ProgressBar/ProgressBar";

const Header = () => {
  const history = useHistory();
  const number = useRef();
  const progress = useRef();
  const strokeDashoffset = 1.83;
  let { answers, dispatchAnswer } = useContext(AnswerContext);
  const getTime = () => {
    return answers.duration;
  };
  const decrease = (n) => {
    answers.duration = answers.duration - n;
    dispatchAnswer({ type: ANSWER_ACTION_TYPE.UPDATE_ANSWER });
  };

  const finishTimeFunction = () => {
    history.push({ pathname: "/result", state: { finish: answers.finish } });
    dispatchAnswer({ type: ANSWER_ACTION_TYPE.RESET_ANSWER });
  };
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <Link
        to="/"
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none"
        dideo-checked="true"
      >
        <Logo />
      </Link>
      <div className="col-md-3 d-flex justify-content-end">
        <ProgressBar
          number={number}
          progress={progress}
          counter={getTime}
          decrease={decrease}
          strokeDashoffset={strokeDashoffset}
          finishTimeFunction={finishTimeFunction}
        />
      </div>
    </header>
  );
};
export default Header;
