import { useState } from "react";

function useEmployees() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Ravi Kumar",
      department: "IT"
    },
    {
      id: 2,
      name: "Priya Sharma",
      department: "HR"
    },
    {
      id: 3,
      name: "Arjun Reddy",
      department: "Finance"
    }
  ]);

  const addEmployee = (employee) => {
    setEmployees([
      ...employees,
      {
        id: employees.length + 1,
        ...employee
      }
    ]);
  };

  return {
    employees,
    addEmployee
  };
}

export default useEmployees;