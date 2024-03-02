# Timetable Generator

This is a timetable generator for the courses offered at IITGN during the 2nd Semester, 2023-24.

---

## Description

This project is a Timetable Generator web application built using React. It allows users to search for courses by their IDs, select them, and generate a timetable based on the selected courses. The generated timetable can be copied to the clipboard for easy sharing and reference.

---

## Features

1. **Search Course:**

   - Users can search for courses by entering their IDs.
   - The application provides real-time search results based on the input.

2. **Select Courses:**

   - Selected courses are displayed in a list.
   - Users can easily remove courses from the selection.

3. **Generate Timetable:**

   - Once courses are selected, users can generate a timetable.
   - The timetable displays course schedules for each day of the week.

4. **Copy to Clipboard:**
   - Generated timetables can be copied to the clipboard with a single click.
   - This feature facilitates easy sharing of timetables with others.

---

## Technologies Used

- React
- Material-UI
- Trie-Search (for efficient searching)
- JSON (for storing course and timetable data)

---

## File Structure

- **Components:**
  - `SearchCourse.jsx`: Handles course search functionality.
  - `DisplayCourses.jsx`: Displays search results and handles course selection.
  - `Selected.jsx`: Manages selected courses and provides options to generate the timetable.
  - `Timetable.jsx`: Generates and displays the timetable.
- **Data:**
  - `timetable_data.json`: Contains course data.
  - `timetable_slots.json`: Contains timetable slots for each day of the week.


