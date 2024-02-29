import React, { useEffect, useState } from "react";
import timetable from "../timetable_data.json";

const DisplayCourses = () => {
  
  return (
    <div>
      {timetable[1]["Course Name"]}
      {timetable[2]["Course Name"]}
    </div>
  );
};
export default DisplayCourses;