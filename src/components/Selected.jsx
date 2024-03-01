import React from "react";
import { Button, Checkbox, List, ListItem, ListItemText } from "@mui/material";

const Selected = ({ selectedCourses }) => {
  const [checkedItems, setCheckedItems] = React.useState({});

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
              defaultChecked
              // checked={checkedItems[index] || false}
              onChange={(event) => handleChange(event, index)}
            />
            <ListItemText
              primary={`${course["Course Code"]}: ${course["Course Name"]}`}
            />
          </ListItem>
        ))}
      </List>
      <Button variant="contained">Generate Timetable</Button>
    </div>
  );
};

export default Selected;
