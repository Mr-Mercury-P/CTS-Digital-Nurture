import React, { useState } from "react";

const BookDetails = () => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div>
      <h2>Book Details</h2>
      {showDetails ? (
        <div>
          <p>Title: React for Beginners</p>
          <p>Author: John Doe</p>
          <button onClick={() => setShowDetails(false)}>Hide Details</button>
        </div>
      ) : (
        <button onClick={() => setShowDetails(true)}>Show Details</button>
      )}
    </div>
  );
};

export default BookDetails;
