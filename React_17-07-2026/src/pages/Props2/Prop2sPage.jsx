import Student from "./Student";

function PropsPage() {
  return (
    <div>
      <h1>Props Example</h1>

      <Student name="Rahul" age="20" />
      <Student name="Priya" age="21" />
      <Student name="Arun" age="22" />
    </div>
  );
}

export default PropsPage;