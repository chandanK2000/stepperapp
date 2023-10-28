// src/CustomStepper.js

import React, { useState, useRef } from "react";
import "./CustomStepper.css";

const CustomStepper = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [linePosition, setLinePosition] = useState({});

  const stepsRef = useRef([]);


  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="mainsection">
      <div className="custom-stepper">
        <div className="steps">
          {[1, 2, 3, 4].map(step => (
            <div
              key={step}
              ref={el => (stepsRef.current[step - 1] = el)}
              className={`step ${activeStep >= step ? "active" : ""}`}
              onClick={() => handleStepClick(step)}
            >
              {activeStep >= step ? (
                <div className="step-mark">&#10004;</div>
              ) : activeStep === step - 1 ? (
                <div className="step-line"></div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="connecting-line" style={linePosition}></div>
        <div className="step-labels">
          <div className="step-label">Step 1</div>
          <div className="step-label">Step 2</div>
          <div className="step-label">Step 3</div>
          <div className="step-label">Step 4</div>
        </div>
      </div>
    </div>
  );
};

export default CustomStepper;
