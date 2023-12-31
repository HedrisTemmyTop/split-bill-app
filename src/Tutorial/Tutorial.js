import React, { useState } from "react";

const messages = [
  "Learn React *",
  "Apply for jobs ",
  "Invest your new income 🤑 ",
];

const App = function () {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handleNext = function () {
    if (step < messages.length) setStep((prev) => prev + 1);
  };
  const handlePrev = function () {
    if (step > 1) setStep((prev) => prev - 1);
  };

  return (
    <React.Fragment>
      <button className="close" onClick={() => setIsOpen((prev) => !prev)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}{" "}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrev}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default App;
