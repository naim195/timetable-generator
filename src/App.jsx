import React, { useState } from "react";
import "./App.css";
import SearchCourse from "./components/SearchCourse";
import Selected from "./components/Selected";
import Timetable from "./components/Timetable";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [generateTable, setGenerateTable] = useState(-1);

  const addToSelected = (course) => {
    setSelectedCourses([...selectedCourses, course]);
  };
  
  return (
    <>
      <h1>Timetable Generator</h1>
      <div className="course-sad">
        <SearchCourse addToSelected={addToSelected} />
        <Selected
          selectedCourses={selectedCourses}
          generateTable={generateTable}
          setGenerateTable={setGenerateTable}
        />
        
      </div>
      {generateTable === 1 && <Timetable selectedCourses={selectedCourses} />}
    </>
  );
}

export default App;
