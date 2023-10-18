import { useState } from "react"

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine
        soaring past the stars and exploring new worlds.
        It's the stuff of dreams and science fiction, but
        believe it or not, space travel is a real thing.
        Humans and robots are constantly venturing out into
        the cosmos to uncover it's secrets and push the
        boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapsedButtonText="Collapse text"
        buttonColor="#ff6622"
        expanded={true}
      >
        Space travel requires some seriously amazing
        technology and collaboration between countries,
        private companies, and international space
        organisation. And ehilr it's not always easy
        (or cheap), the reuslts are out of this world.
        Think about the first time humans stepped foot
        on the moon or when rovers were sent to raom
        around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into
        our universe and have inspired future generations to
        keep reaching for the stars. Space travel is a pretty
        cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  )
}

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapsedButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
  className,
}) {

  const [isExapanded, setIsExpanded] = useState(expanded);

  const displayText = isExapanded
    ? children
    : children.split(' ').slice(0, collapsedNumWords).join(' ') + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    margineLeft: "10px",
    color: buttonColor,
  }

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button
        style={buttonStyle}
        onClick={() => setIsExpanded((exp) => !exp)}
      >
        {isExapanded ? collapsedButtonText : expandButtonText}
      </button>
    </div>
  )
}


