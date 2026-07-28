import useForm from "../Hooks/UseForm";

function Employee() {
  const {
    formData,
    handleChange,
    resetForm
  } = useForm({
    name: "",
    department: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `Name: ${formData.name}, Department: ${formData.department}`
    );
  };

  return (
    <>
      <h2>Employee Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter employee name"
          value={formData.name}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="department"
          placeholder="Enter department"
          value={formData.department}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">
          Submit
        </button>

        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </>
  );
}

export default Employee;