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
      <Step />
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

          <p className="message">
            Step {step}: {message[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
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
    </div>
  );
}