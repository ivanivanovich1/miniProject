import { useState } from "react";
import subjectList from "../data/subjects.json";
import { Pictures } from "./Pictures";

export const Form = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("Tarkvaraarenduse meetodid");
  const [subjectRating, setSubjectRating] = useState();
  const [lessonRating, setLessonRating] = useState();
  const [teacherRating, setTeacherRating] = useState();
  const [feedback, setFeedback] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmited(true);
  };

  return (
    <>
      {!isSubmited ? (
        <div>
          <h1 className="text-2xl font-bold text-center mb-3">
            Rate your lesson at TPT bro
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
                className="input input-bordered w-full"
              />
              <select className="select select-bordered w-full">
                {subjectList.map((subject) => {
                  return (
                    <option
                      onClick={() => setSubject(subject.title)}
                      key={subject.id}
                    >
                      {subject.title}
                    </option>
                  );
                })}
              </select>
              <span>
                <p>How would you rate this subject?</p>
                <div className="rating">
                  <input
                    onClick={() => setSubjectRating(1)}
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    onClick={() => setSubjectRating(2)}
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    onClick={() => setSubjectRating(3)}
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    onClick={() => setSubjectRating(4)}
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    onClick={() => setSubjectRating(5)}
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                </div>
              </span>
              <span>
                <p>How would you rate feel the lesson?</p>
                <div className="rating">
                  <input
                    onClick={() => setLessonRating(1)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star"
                  />
                  <input
                    onClick={() => setLessonRating(2)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star"
                  />
                  <input
                    onClick={() => setLessonRating(3)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star"
                  />
                  <input
                    onClick={() => setLessonRating(4)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star"
                  />
                  <input
                    onClick={() => setLessonRating(5)}
                    type="radio"
                    name="rating-2"
                    className="mask mask-star"
                  />
                </div>
              </span>
              <span>
                <p>How would you rate the teacher of this subject?</p>
                <div className="rating">
                  <input
                    onClick={() => setTeacherRating(1)}
                    type="radio"
                    name="rating-3"
                    className="mask mask-star"
                  />
                  <input
                    onClick={() => setTeacherRating(2)}
                    type="radio"
                    name="rating-3"
                    className="mask mask-star"
                  />
                  <input
                    onClick={() => setTeacherRating(3)}
                    type="radio"
                    name="rating-3"
                    className="mask mask-star"
                  />
                  <input
                    onClick={() => setTeacherRating(4)}
                    type="radio"
                    name="rating-3"
                    className="mask mask-star"
                  />
                  <input
                    onClick={() => setTeacherRating(5)}
                    type="radio"
                    name="rating-3"
                    className="mask mask-star"
                  />
                </div>
              </span>
              <div>
                <label className="label">
                  <span className="label-text">Feedback</span>
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="textarea h-36 resize-none textarea-bordered textarea-md w-full"
                ></textarea>
              </div>
              <button className="btn btn-primary">submit</button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <header className="mb-3 text-center">
            <h2 className="font-bold text-2xl">Your form is submitted, bro!</h2>
            <p>This is funny man:</p>
          </header>
          <Pictures />
        </>
      )}
    </>
  );
};
