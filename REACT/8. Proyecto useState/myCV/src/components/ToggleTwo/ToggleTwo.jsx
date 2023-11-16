import { useState } from "react";
import "./ToggleTwo.css";
import { Skills } from "../index";


export const ToggleTwo = ({ hardSkills, softSkills }) => {
  const [showCard, setShowCard] = useState(true);
  return (
    <div className="toggle">
      <button
        className="btn btn-education"
        id={showCard ? "active" : "inactive"}
        onClick={() => setShowCard(true)}
      >
        🎓 Hard Skills
      </button>
      <button
        className="btn btn-experience"
        id={showCard ? "inactive" : "active"}
        onClick={() => setShowCard(false)}
      >
        👩🏻‍💻 Soft Skills
      </button>
      <div>
        {showCard ? (
          <Skills skills={hardSkills}/>
        ) : (
          <Skills skills={softSkills}/>
        )}
      </div>
    </div>
  );
};
