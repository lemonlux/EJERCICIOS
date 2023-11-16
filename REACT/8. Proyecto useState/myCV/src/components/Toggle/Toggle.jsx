import { useState } from "react";
import "./Toggle.css";
import { Experience, Education } from "../index";

export const Toggle = ({ experience, education }) => {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="toggle">
      <button
        className="btn btn-education"
        id={showEducation ? "active" : "inactive"}
        onClick={() => setShowEducation(true)}
      >
        🎓 Education
      </button>
      <button
        className="btn btn-experience"
        id={showEducation ? "inactive" : "active"}
        onClick={() => setShowEducation(false)}
      >
        👩🏻‍💻 Experience
      </button>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
    </div>
  );
};
