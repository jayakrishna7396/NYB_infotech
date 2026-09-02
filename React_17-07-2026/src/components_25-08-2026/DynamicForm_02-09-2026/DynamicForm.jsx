import { useState } from "react";

function DynamicForm() {
  const [skills, setSkills] = useState([""]);

  // Add new field
  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  // Remove field
  const removeSkill = (index) => {
    const updatedSkills = skills.filter(
      (_, i) => i !== index
    );

    setSkills(updatedSkills);
  };

  // Change field value
  const handleChange = (index, value) => {
    const updatedSkills = [...skills];

    updatedSkills[index] = value;

    setSkills(updatedSkills);
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Skills:", skills);

    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h1>Dynamic Form Fields</h1>

      <form onSubmit={handleSubmit}>

        {skills.map((skill, index) => (
          <div key={index}>

            <input
              type="text"
              value={skill}
              onChange={(e) =>
                handleChange(index, e.target.value)
              }
              placeholder={`Enter Skill ${index + 1}`}
            />

            <button
              type="button"
              onClick={() => removeSkill(index)}
            >
              Remove
            </button>

            <br />
            <br />

          </div>
        ))}

        <button
          type="button"
          onClick={addSkill}
        >
          + Add Skill
        </button>

        <br />
        <br />

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default DynamicForm;