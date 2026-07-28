import Employee from "./Employee2";

function EmployeeList({ employees }) {
  return (
    <>
      <h2>Employee List</h2>

      {employees.map((employee) => (
        <div key={employee.id}>
          <Employee
            name={employee.name}
            department={employee.department}
          />

          <hr />
        </div>
      ))}
    </>
  );
}

export default EmployeeList;