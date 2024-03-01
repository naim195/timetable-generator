import React, { useState } from "react";
import "./App.css";
import SearchCourse from "./components/SearchCourse";
import Selected from "./components/Selected";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const addToSelected = (course) => {
    setSelectedCourses([...selectedCourses, course]);
  };

  return (
    <>
      <h1>Timetable Generator</h1>
      <SearchCourse addToSelected={addToSelected} />
      <Selected selectedCourses={selectedCourses} />
    </>
  );
}

export default App;
