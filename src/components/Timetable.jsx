import { useState, useRef } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Tooltip,
} from "@mui/material";
import timetableSlots from "../timetable_slots.json";
import "../styles/timetable.css";
import html2canvas from "html2canvas";

const Timetable = ({ selectedCourses }) => {
  const slotToCourse = {};
  selectedCourses.forEach((course) => {
    course.Lecture.forEach((slot) => {
      slotToCourse[slot] = course["Course Code"];
    });

    if (course.Tutorial.length <= 2) {
      course.Tutorial.forEach((slot) => {
        slotToCourse[slot] = `${course["Course Code"]}(T)`;
      });
    }

    if (course.Lab.length <= 2) {
      course.Lab.forEach((slot) => {
        slotToCourse[slot] = `${course["Course Code"]}(Lab)`;
      });
    }
  });

  const [copied, setCopied] = useState(false);
  const tableRef = useRef(null);

  const copyToClipboard = () => {
    const headerRow = [
      "Time Slot",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ].join("\t");
    const tableContent = [headerRow]
      .concat(
        timetableSlots.map((slot) => {
          return [
            slot.Slot,
            slotToCourse[slot.M] || slot.M,
            slotToCourse[slot.T] || slot.T,
            slotToCourse[slot.W] || slot.W,
            slotToCourse[slot.Th] || slot.Th,
            slotToCourse[slot.F] || slot.F,
          ].join("\t");
        }),
      )
      .join("\n");

    navigator.clipboard.writeText(tableContent).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const captureScreenshot = () => {
    html2canvas(tableRef.current).then(function (canvas) {
      const screenshot = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = screenshot;
      link.download = "timetable.png";
      link.click();
    });
  };

  return (
    <div>
      <h3>
        Note: If your labs have sections, the generated timetable won't show the
        lab slot. Please add your lab slot manually.
      </h3>
      <Table ref={tableRef} className="table">
        <TableHead>
          <TableRow>
            <TableCell className="text-center">Time Slot</TableCell>
            <TableCell className="text-center">Monday</TableCell>
            <TableCell className="text-center">Tuesday</TableCell>
            <TableCell className="text-center">Wednesday</TableCell>
            <TableCell className="text-center">Thursday</TableCell>
            <TableCell className="text-center">Friday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timetableSlots.map((slot, index) => (
            <TableRow key={index}>
              <TableCell className="text-center">{slot.Slot}</TableCell>
              <TableCell className="text-center">
                {slotToCourse[slot.M] || slot.M}
              </TableCell>
              <TableCell className="text-center">
                {slotToCourse[slot.T] || slot.T}
              </TableCell>
              <TableCell className="text-center">
                {slotToCourse[slot.W] || slot.W}
              </TableCell>
              <TableCell className="text-center">
                {slotToCourse[slot.Th] || slot.Th}
              </TableCell>
              <TableCell className="text-center">
                {slotToCourse[slot.F] || slot.F}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="btn-container">
        <Tooltip title="Paste this in Google Sheets to modify it!!">
          <Button
            variant="contained"
            onClick={copyToClipboard}
            className="copy"
          >
            {copied ? "Copied!" : "Copy to Clipboard"}
          </Button>
        </Tooltip>
        <Button
          variant="contained"
          onClick={captureScreenshot}
          className="screenshot"
        >
          Take Screenshot
        </Button>
      </div>
    </div>
  );
};

export default Timetable;
