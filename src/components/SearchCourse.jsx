import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import TrieSearch from "trie-search";
import timetable from "../timetable_data.json";
import DisplayCourses from "./DisplayCourse";

const removeRedundant = () => {
  timetable.forEach((course) => {
    for (let prop in course) {
      if (course[prop].includes("\n")) {
        course[prop] = course[prop].split("\n")[0];
      }
      if (prop === "Lecture" || prop === "Tutorial" || prop === "Lab")
        course[prop] = course[prop].split("\n")[0].split(",");
    }
  });
};
removeRedundant();

export default function SearchCourse({ addToSelected, selectedCourses }) {
  const [courseNameOrID, setCourseNameOrID] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Parse the timetable data and build a Trie data structure
  useEffect(() => {
    const trie = new TrieSearch("Course Code");
    trie.addAll(timetable);
    if (courseNameOrID.trim() !== "") {
      const results = trie.get(courseNameOrID);
      setSearchResults(
        results.filter((course) => !selectedCourses.includes(course)) || [],
      );
    } else {
      setSearchResults([]);
    }
  }, [courseNameOrID, selectedCourses]);

  return (
    <div>
      <TextField
        id="search"
        label="Enter Course ID"
        variant="filled"
        onChange={(e) => setCourseNameOrID(e.target.value.toUpperCase())}
      />
      {courseNameOrID.length > 0 && (
        <DisplayCourses courses={searchResults} addToSelected={addToSelected} />
      )}
    </div>
  );
}
