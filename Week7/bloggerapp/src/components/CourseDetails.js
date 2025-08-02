import React from "react";

const CourseDetails = () => {
  const courses = [
    { id: 1, name: "React for Beginners", available: true },
    { id: 2, name: "Advanced JavaScript", available: false },
    { id: 3, name: "Node.js Masterclass", available: true },
  ];

  return (
    <div>
      <h2>Course Details</h2>
      {courses.length === 0 ? (
        <p>No courses available</p>
      ) : (
        courses.map((course) => (
          <div key={course.id}>
            {course.available ? (
              <p>{course.name} - Available</p>
            ) : (
              <p>{course.name} - Coming Soon</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default CourseDetails;
