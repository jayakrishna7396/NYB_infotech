import { useStudent } from "../context/StudentContext";

function Header() {
  const { student } = useStudent();

  return (
    <header>
      <h1>Student Dashboard</h1>

      <p>Welcome, {student.name}</p>
    </header>
  );
}

export default Header;