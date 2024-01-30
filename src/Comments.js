import "./Comment.css"
import { useState } from "react";
const Comments = ({onCommentsSubmit, email}) => {

  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [studentEmail, setStudentEmail] = useState(email);
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentsData = {
      courseCode,
      courseName,
      studentEmail,
      comments,
    };
    // Passing comments data to the parent component
    onCommentsSubmit(commentsData);
  };

  return (
    <div>

    <form className="comments-form" onSubmit={handleSubmit}>
      <label htmlFor="courseCode">Course Code:</label>
        <input
          type="text"
          id="courseCode"
          name="courseCode"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          required
        />

        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />

        <label htmlFor="studentEmail">Student Email:</label>
        <input
          type="email"
          id="studentEmail"
          name="studentEmail"
          value={studentEmail}
          onChange={(e) => setStudentEmail(e.target.value)}
          required
        />

        <label htmlFor="comments">Your Comments:</label>
        <textarea
          id="comments"
          name="comments"
          rows="4"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          required
        ></textarea>

        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Comments