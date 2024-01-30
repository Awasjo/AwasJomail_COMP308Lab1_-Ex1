import './ThankYou.css'; // Adjust the path based on your project structure

const ThankYou = ({ email, comment }) => {
  return (
    <div className="container">
      <h1>Thank you {email}</h1>
      <p>We appreciate your comment: {comment}</p>
      <a href="/">Back to Home</a>
    </div>
  );
};

export default ThankYou;
