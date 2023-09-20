import { useState } from "react";
import subjectList from "../data/subjects.json";

export const Form = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [feedback, setFeedback] = useState("");

  return (
    <div>
      <form>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            className="input input-bordered w-full max-w-xs"
          />
          <select className="select select-bordered w-full max-w-xs">
            {subjectList.map((subject) => {
              return <option key={subject.id}>{subject.title}</option>;
            })}
          </select>
          <div>
            <label className="label">
              <span className="label-text">Feedback</span>
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="textarea h-36 resize-none textarea-bordered textarea-md w-full max-w-xs"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};
