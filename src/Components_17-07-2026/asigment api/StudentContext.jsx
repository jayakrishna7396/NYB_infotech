import { createContext, useContext, useState } from "react";

// Create Context
const StudentContext = createContext();

// Create Provider
export function StudentProvider({ children }) {
  const [student, setStudent] = useState({
    name: "Jaya",
    course: "React",
    age: 22,
  });

  // Update Student Name
  function updateName() {
    setStudent({
      ...student,
      name: "Krishna",
    });
  }

  return (
    <StudentContext.Provider
      value={{
        student,
        updateName,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

// Reusable Custom Hook
export function useStudent() {
  return useContext(StudentContext);
}