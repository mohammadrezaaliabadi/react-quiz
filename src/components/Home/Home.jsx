/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useState } from "react";
import { Redirect } from "react-router-dom";
import { DATA_ANSWER, DATA_QUESTION as DATA } from "../../data/data";
import Question from "../Question/Question";

const Home = ({ authorized }) => {
  if (!authorized) {
    <Redirect to="/" />;
  }
  const [id, setId] = useState(1);
  const [index, setIndex] = useState(0);
  const [finishClassBtn, setFinishClassBtn] = useState("d-none");
  const [nextClassBtn, setNextClassBtn] = useState("");
  const [prevClassBtn, setPrevClassBtn] = useState("");
  const updateAction = (i) => {
    if (i + 1 === DATA.length) {
      setFinishClassBtn("");
      setNextClassBtn("disabled");
    } else {
      setNextClassBtn("");
      setFinishClassBtn("d-none");
    }
    if (i === 0) {
      setPrevClassBtn("disabled");
    } else {
      setPrevClassBtn("");
    }
  };
  const handleNext = () => {
    const i = Math.min(DATA.length - 1, index + 1);
    setIndex(i);
    setId(DATA[i]["id"]);
    console.log(i);
    updateAction(i);
  };
  const handlePrev = () => {
    const i = Math.max(0, index - 1);
    setIndex(i);
    setId(DATA[i]["id"]);
    updateAction(i);
  };
  return (
    <div className="m-5 gy-5 rounded">
      <div className="row justify-content-center">
        <Question id={id} />
      </div>
      <div className="col-12 p-3 shadow d-grid gap-2 d-md-flex justify-content-star">
        <button
          className={`btn m-2 btn-primary ${prevClassBtn}`}
          onClick={handlePrev}
        >
          Prev
        </button>

        <button
          className={`btn m-2 btn-primary ${nextClassBtn}`}
          onClick={handleNext}
        >
          Next
        </button>
        <button
          onClick={() => console.log(DATA_ANSWER)}
          className={`btn m-2 btn-primary ${finishClassBtn}`}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default Home;
