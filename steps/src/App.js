import { useState } from "react";

const message = [
  "Learn React 🤞🏻",
  "Apply for jobs 👍",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Step />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>🫶</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>🤟</p>
      </StepMessage>
    </div>
  )
}

function Step() {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //const [test, setTest] = useState({ name: "Krishna" });

  // const step = 1;

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      //setStep((s) => s + 1);
    }

    // Bad practice
    //test.name = "Neha";
    //setTest({ name: "Neha" });
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ''}>1</div>
            <div className={step >= 2 ? "active" : ''}>2</div>
            <div className={step >= 3 ? "active" : ''}>3</div>
          </div>

          <StepMessage step={step}>
            {message[step - 1]}
            <div className="buttons">
              <button
                bgColor="#7950f2"
                textColor="#fff"
                onClick={() => alert(`Learn how to ${message[step - 1]}`)}
              >
                Learn how
              </button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
            // text="Previous"
            // emoji="👈"
            >
              <span>👈</span> Previous
            </Button>

            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handleNext}
            // text="Next"
            // emoji="👉"
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}: </h3>
      {children}
    </div>
  )
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}