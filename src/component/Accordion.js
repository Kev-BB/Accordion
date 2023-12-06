import { Questions } from "../mock/data";
import { useState } from "react";

export function Accordion() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {Questions.map((question, index) => (
        <div
          className="container"
          key={question.id}
          onClick={() => setIsActive(isActive === index ? false : index)}
        >
          <div className="q-container">
            <h2 className="title">{question.title}</h2>
            <button>{isActive === index ? "-" : "+"}</button>
          </div>
          {isActive === index && (
            <p className="content">{question.description}</p>
          )}
        </div>
      ))}
    </>
  );
}
