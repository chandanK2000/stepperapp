import React, { useState } from "react";
import "./steppe2.css";
import { toast } from "react-toastify";

const Stepper2 = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = step => {
    setActiveStep(step);
    toast.success(`Step ${step + 1} activated!`);
  };

  return (
    <div className="stepper-container">
      <div className="step-indicator">
        <div
          onClick={() => handleStepClick(0)}
          className={`step ${activeStep === 0 ? "active" : ""}`}
        >
          <div className="step-mark">1</div>
        </div>
        <div className={`line ${activeStep >= 1 ? "active" : ""}`}></div>
        <div
          onClick={() => handleStepClick(1)}
          className={`step ${activeStep === 1 ? "active" : ""}`}
        >
          <div className="step-mark">2</div>
        </div>
        <div className={`line ${activeStep >= 2 ? "active" : ""}`}></div>
        <div
          onClick={() => handleStepClick(2)}
          className={`step ${activeStep === 2 ? "active" : ""}`}
        >
          <div className="step-mark">3</div>
        </div>
        <div className={`line ${activeStep >= 3 ? "active" : ""}`}></div>
        <div
          onClick={() => handleStepClick(3)}
          className={`step ${activeStep === 3 ? "active" : ""}`}
        >
          <div className="step-mark">4</div>
        </div>
      </div>

      <div className="step-labels">
        <div className={`step-label ${activeStep === 0 ? "bold" : ""}`}>
          Personal
        </div>
        <div className={`step-label ${activeStep === 1 ? "bold" : ""}`}>
          Seat
        </div>
        <div className={`step-label ${activeStep === 2 ? "bold" : ""}`}>
          Payment
        </div>
        <div className={`step-label ${activeStep === 3 ? "bold" : ""}`}>
          Confirm
        </div>
      </div>
    </div>
  );
};

export default Stepper2;
