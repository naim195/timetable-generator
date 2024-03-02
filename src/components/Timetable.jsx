import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import timetableSlots from "../timetable_slots.json";

const Timetable = ({ selectedCourses }) => {
  const slotToCourse = {};
  selectedCourses.forEach((course) => {
    course.Lecture.forEach((slot) => {
      slotToCourse[slot] = course["Course Code"];
    });
  });

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const tableContent = timetableSlots
      .map((slot) => {
        return [
          slot.Slot,
          slotToCourse[slot.M] || slot.M,
          slotToCourse[slot.T] || slot.T,
          slotToCourse[slot.W] || slot.W,
          slotToCourse[slot.Th] || slot.Th,
          slotToCourse[slot.F] || slot.F,
        ].join("\t");
      })
      .join("\n");

    navigator.clipboard.writeText(tableContent).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  return (
    <div>
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
              <TableCell>{slotToCourse[slot.M] || slot.M}</TableCell>
              <TableCell>{slotToCourse[slot.T] || slot.T}</TableCell>
              <TableCell>{slotToCourse[slot.W] || slot.W}</TableCell>
              <TableCell>{slotToCourse[slot.Th] || slot.Th}</TableCell>
              <TableCell>{slotToCourse[slot.F] || slot.F}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" onClick={copyToClipboard}>
        {copied ? "Copied!" : "Copy to Clipboard"}
      </Button>
    </div>
  );
};

export default Timetable;
