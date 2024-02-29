import { TextField } from "@mui/material";
import { useState } from "react";

export default function SearchCourse() {
  const [courseName, setCourseName] = useState("");
  console.log(courseName);

  return (
    <div>
      <TextField
        id="search"
        label="Search"
        variant="standard"
        onChange={(e) => setCourseName(e.target.value)}
      />
    </div>
  );
}
