// src/StudentContext.jsx
import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const editStudent = (updatedStudent) => {
    setStudents(students.map(student => student.id === updatedStudent.id ? updatedStudent : student));
  };

  const deleteStudent = (studentId) => {
    setStudents(students.filter(student => student.id !== studentId));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, editStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};
