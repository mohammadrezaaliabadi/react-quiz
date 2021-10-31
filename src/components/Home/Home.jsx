/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DATA_QUESTION as DATA } from "../../data/data";
import Question from "../Question/Question";

const Home = () => {
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
    updateAction(i);
  };
  const handlePrev = () => {
    const i = Math.max(0, index - 1);
    setIndex(i);
    setId(DATA[i]["id"]);
    updateAction(i);
  };

  return (
    <div className="m-3  gy-5 rounded">
      <div className="row justify-content-center">
        <Question id={id} />
      </div>
      <div className="col-12 p-3 box d-grid gap-2 d-md-flex justify-content-star">
        <button className={`btn-my m-2 ${prevClassBtn}`} onClick={handlePrev}>
          Prev
        </button>

        <button className={`btn-my m-2 ${nextClassBtn}`} onClick={handleNext}>
          Next
        </button>
        <button className={`btn-my m-2 ${finishClassBtn}`}>
          <Link className="text-black text-decoration-none" to="/result">
            Finish
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
