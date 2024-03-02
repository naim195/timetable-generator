import React, { useEffect, useState } from "react";
import { Button, Checkbox, List, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Selected = ({
  selectedCourses,
  setSelectedCourses,
  generateTable,
  setGenerateTable,
}) => {
  const handleDelete = (courseToDelete) => {
    setSelectedCourses(
      selectedCourses.filter((course) => course !== courseToDelete)
    );
  };

  return (
    <div>
      <h2>Selected Courses</h2>
      <List>
        {selectedCourses.map((course, index) => (
          <ListItem key={index} dense>
            <ListItemText
              primary={`${course["Course Code"]}: ${course["Course Name"]}`}
            />
            <DeleteIcon onClick={() => handleDelete(course)} />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        onClick={() => setGenerateTable(generateTable * -1)}
      >
        Generate Timetable
      </Button>
    </div>
  );
};

export default Selected;
