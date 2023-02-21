import React from "react";

export default function Quiz() {
  function onNext() {
    console.log("On onNext click");
  }

  function onPrev() {
    console.log("On onPrev click");
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* display questions */}

      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Previous
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
