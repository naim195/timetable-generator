import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import timetableSlots from "../timetable_slots.json";

const Timetable = ({ selectedCourses }) => {
    // Create a mapping from slot names to course IDs
    const slotToCourse = {};
    selectedCourses.forEach(course => {
      course.Lecture.forEach(slot => {
        slotToCourse[slot] = course["Course Code"];
      });
    });
  
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
          {timetableSlots.map((slot, index) => (
            <TableRow key={index}>
              <TableCell>{slot.Slot}</TableCell>
              <TableCell>
                {slotToCourse[slot.M] || slot.M}
              </TableCell>
              <TableCell>
                {slotToCourse[slot.T] || slot.T}
              </TableCell>
              <TableCell>
                {slotToCourse[slot.W] || slot.W}
              </TableCell>
              <TableCell>
                {slotToCourse[slot.Th] || slot.Th}
              </TableCell>
              <TableCell>
                {slotToCourse[slot.F] || slot.F}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
  
export default Timetable;
