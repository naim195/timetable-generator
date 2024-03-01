import React, { useState } from "react";

const DisplayCourses = ({ courses, addToSelected }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course["Course Code"]}>
          <div onClick={() => addToSelected(course)}>
            {course["Course Code"]}: {course["Course Name"]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayCourses;
