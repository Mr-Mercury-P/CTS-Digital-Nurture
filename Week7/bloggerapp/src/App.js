import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("book");

  return (
    <div>
      <h1>Welcome to BloggerApp</h1>
      <div>
        <button onClick={() => setActiveComponent("book")}>Book Details</button>
        <button onClick={() => setActiveComponent("blog")}>Blog Details</button>
        <button onClick={() => setActiveComponent("course")}>Course Details</button>
      </div>

      {activeComponent === "book" && <BookDetails />}
      {activeComponent === "blog" && <BlogDetails />}
      {activeComponent === "course" && <CourseDetails />}
    </div>
  );
};

export default App;
