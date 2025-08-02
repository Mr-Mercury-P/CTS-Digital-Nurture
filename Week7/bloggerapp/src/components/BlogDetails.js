import React, { useState } from "react";

const BlogDetails = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Blog Details</h2>
      {isLoggedIn ? (
        <div>
          <p>Blog Post: React Basics</p>
          <p>Content: Learning React step by step.</p>
        </div>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login to view blog</button>
      )}
    </div>
  );
};

export default BlogDetails;
