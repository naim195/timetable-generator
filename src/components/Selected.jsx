import React from "react";
import { CheckBox } from "@mui/icons-material";

const Selected = ({ selectedCourses }) => {
  return (
    <div>
      <h2>Selected Courses</h2>
      <ul>
        {selectedCourses.map((course, index) => (
          <li key={index}>
            <CheckBox />
            {course["Course Code"]}: {course["Course Name"]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selected;
