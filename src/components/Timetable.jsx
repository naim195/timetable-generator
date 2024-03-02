import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import data from "../timetable_slots.json";

const Timetable = (selectedCourses) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Time Slot</TableCell>
          <TableCell>Monday</TableCell>
          <TableCell>Tuesday</TableCell>
          <TableCell>Wednesday</TableCell>
          <TableCell>Thursday</TableCell>
          <TableCell>Friday</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((slot, index) => (
          <TableRow key={index}>
            <TableCell>{slot.Slot}</TableCell>
            <TableCell>{slot.M}</TableCell>
            <TableCell>{slot.T}</TableCell>
            <TableCell>{slot.W}</TableCell>
            <TableCell>{slot.Th}</TableCell>
            <TableCell>{slot.F}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Timetable;
