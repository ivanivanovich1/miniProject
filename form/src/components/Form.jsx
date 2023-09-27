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

  let id = 2;

  const fetchApi = async () => {
    try {
      const nameUrl = `http://127.0.0.1:5000/?table=A${id}&data=${name}`;
      const subjectUrl = `http://127.0.0.1:5000/?table=B${id}&data=${subject}`;
      const subjectRatingUrl = `http://127.0.0.1:5000/?table=C${id}&data=${subjectRating}`;
      const lessonRatingUrl = `http://127.0.0.1:5000/?table=D${id}&data=${lessonRating}`;
      const teacherRatingUrl = `http://127.0.0.1:5000/?table=E${id}&data=${teacherRating}`;
      const feedbackUrl = `http://127.0.0.1:5000/?table=F${id}&data=${feedback}`;

      const nameUrlRes = await fetch(nameUrl);
      const subjectUrlRes = await fetch(subjectUrl);
      const subjectRatingUrlRes = await fetch(subjectRatingUrl);
      const lessonRatingUrlRes = await fetch(lessonRatingUrl);
      const teacherRatingUrlRes = await fetch(teacherRatingUrl);
      const feedbackUrlRes = await fetch(feedbackUrl);

      nameUrl = await nameUrlRes.text();
      subjectUrl = await subjectUrlRes.text();
      subjectRatingUrl = await subjectRatingUrlRes.text();
      lessonRatingUrl = await lessonRatingUrlRes.text();
      teacherRatingUrl = await teacherRatingUrlRes.text();
      feedbackUrl = await feedbackUrlRes.text();

      console.log([
        nameUrl,
        subjectUrl,
        subjectRatingUrl,
        lessonRatingUrl,
        teacherRatingUrl,
        feedbackUrl,
      ]);
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      fetchApi();
    } catch (error) {
      throw new Error(error);
    }

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
              <select
                onChange={(e) => setSubject(e.target.value)}
                className="select select-bordered w-full"
              >
                {subjectList.map((subject) => {
                  return (
                    <option key={subject.id} value={subject.title}>
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
