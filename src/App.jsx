import { useState } from "react";
import "./App.css";
import SearchCourse from "./components/SearchCourse";
import DisplayCourses from "./components/DisplayCourses";

function App() {
  return (
    <>
      <SearchCourse />
      <DisplayCourses />
    </>
  );
}

export default App;
