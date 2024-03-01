import React, { useEffect, useState } from "react";
import { Button, Checkbox, List, ListItem, ListItemText } from "@mui/material";

const Selected = ({ selectedCourses, generateTable, setGenerateTable }) => {
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const initialCheckedItems = {};
    selectedCourses.forEach((_, index) => {
      initialCheckedItems[index] = true;
    });
    setCheckedItems(initialCheckedItems);
  }, [selectedCourses]);

  const handleChange = (event, index) => {
    setCheckedItems({
      ...checkedItems,
      [index]: event.target.checked,
    });
  };
  

  return (
    <div>
      <h2>Selected Courses</h2>
      <List>
        {selectedCourses.map((course, index) => (
          <ListItem key={index} dense>
            <Checkbox
              checked={checkedItems[index] || false}
              onChange={(event) => handleChange(event, index)}
            />
            <ListItemText
              primary={`${course["Course Code"]}: ${course["Course Name"]}`}
            />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={()=>setGenerateTable(generateTable*-1)}>
        Generate Timetable
      </Button>
    </div>
  );
};

export default Selected;
