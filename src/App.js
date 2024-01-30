import React, { useState } from 'react';
import Login from './Login';
import Comments from './Comments';
import ThankYou from './ThankYou';

function App() {
  const [user, setUser] = useState(null); // State to track the logged-in user
  const [commentsData, setCommentsData] = useState(null); // State to store comments data

  const handleLogin = (userData) => {
    // Assuming you have some authentication logic
    // For simplicity, just setting the user for now
    setUser(userData);
  };

  const handleCommentsSubmit = (comments) => {
    // Assuming you want to store comments data
    setCommentsData(comments);
  };

  return (
    <div className="App">
      {user ? (
        commentsData ? (
          <ThankYou email={user.email} comment={commentsData.comments} /> //this is the page when both comment data and user data are not null
        ) : (
          <Comments onCommentsSubmit={handleCommentsSubmit} email={user.email}/> //this is the page if user data is not null and comment data is null
        )
      ) : (
        <Login onLogin={handleLogin} /> //this is the default landing page, if user data is null
      )}
    </div>
  );
}

export default App;
