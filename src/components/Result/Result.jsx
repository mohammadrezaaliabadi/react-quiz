import React from "react";
import "./Result.scss";
const Result = () => {
  return (
    <>
      <div class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold">Thank you!</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn-my btn-lg px-4 gap-3">
              Primary button
            </button>
            <button type="button" class="btn-my btn-lg px-4">
              Secondary
            </button>
          </div>
        </div>
      </div>
      <div id="background-wrap">
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
      </div>
    </>
  );
};

export default Result;
