import { useState } from "react";
import "./Toggle.css";
import { Experience, Education, Skills } from "../index";


export const Toggle = ({ experience, education, skills }) => {
  const [showCard, setShowCard] = useState(true);
  return (
    <div className="toggle">
      <button
        className="btn btn-education"
        id={showCard ? "active" : "inactive"}
        onClick={() => setShowCard(true)}
      >
        🎓 Education
      </button>
      <button
        className="btn btn-experience"
        id={showCard ? "inactive" : "active"}
        onClick={() => setShowCard(false)}
      >
        👩🏻‍💻 Experience
      </button>
      <div>
        {showCard ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
    </div>
  );
};


// export const Toggle = ({ Component, SecondComponent, info, secondInfo }) => {
//   const [showCard, setShowCard] = useState(true);
//   return (
//     <div className="toggle">
//       <button
//         className="btn btn-education"
//         id={showCard ? "active" : "inactive"}
//         onClick={() => setShowCard(true)}
//       >
//         🎓 {Component.toString()}
//       </button>
//       <button
//         className="btn btn-experience"
//         id={showCard ? "inactive" : "active"}
//         onClick={() => setShowCard(false)}
//       >
//         👩🏻‍💻 {SecondComponent.toString()}
//       </button>
//       <div>
//         {showCard ? (
//           <Component info={info} />
//         ) : (
//           <SecondComponent secondInfo={secondInfo} />
//         )}
//       </div>
//     </div>
//   );
// };

