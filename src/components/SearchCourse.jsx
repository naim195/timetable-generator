import React, { useEffect, useState } from "react";
import { TextField, Autocomplete } from "@mui/material";
import TrieSearch from "trie-search";
import timetable from "../timetable_data.json";

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

export default function SearchCourse({ addToSelected }) {
  const [courseNameOrID, setCourseNameOrID] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Parse the timetable data and build a Trie data structure
  useEffect(() => {
    const trie = new TrieSearch("Course Code");
    trie.addAll(timetable);
    if (courseNameOrID.trim() !== "") {
      const results = trie.get(courseNameOrID);
      setSearchResults(results || []);
    } else {
      setSearchResults([]);
    }
  }, [courseNameOrID]);

  return (
    <div>
      <Autocomplete
        id="search"
        options={searchResults}
        getOptionLabel={(option) =>
          `${option["Course Code"]}: ${option["Course Name"]}`
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter Course ID"
            variant="filled"
            onChange={(e) => setCourseNameOrID(e.target.value.toUpperCase())}
            style={{ width: 300 }} // Adjust width here
          />
        )}
        onClose={() => {}}
        onChange={(event, value) => {
          if (value) {
            addToSelected(value);
            setCourseNameOrID(""); // Reset the input after selection
          }
        }}
      />
    </div>
  );
}
