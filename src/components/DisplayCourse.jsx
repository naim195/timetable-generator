import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import "../styles/dispcourses.css";

const DisplayCourses = ({ courses, addToSelected }) => {
    return (
      <div className="coursesContainer">
        {courses.map((course) => (
          <div key={course["Course Code"]}>
            <Button variant="text" onClick={() => addToSelected(course)}>
              {course["Course Code"]}: {course["Course Name"]}
            </Button>
          </div>
        ))}
      </div>
    );
  };
  

export default DisplayCourses;
