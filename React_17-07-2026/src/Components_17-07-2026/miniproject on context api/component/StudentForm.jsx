import { useReducer } from "react";

function reducer(state, action) {

  switch (action.type) {

    case "SET_NAME":
      return {
        ...state,
        name: action.value
      };

    case "SET_COURSE":
      return {
        ...state,
        course: action.value
      };

    case "RESET":
      return {
        name: "",
        course: ""
      };

    default:
      return state;
  }
}

function StudentForm() {

  const [state, dispatch] = useReducer(
    reducer,
    {
      name: "",
      course: ""
    }
  );

  return (
    <div>

      <h2>Student Form</h2>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "SET_NAME",
            value: e.target.value
          })
        }
      />

      <br /><br />

      <input
        type="text"
        placeholder="Enter Course"
        value={state.course}
        onChange={(e) =>
          dispatch({
            type: "SET_COURSE",
            value: e.target.value
          })
        }
      />

      <p>
        Student Name: {state.name}
      </p>

      <p>
        Course: {state.course}
      </p>

      <button
        onClick={() =>
          dispatch({ type: "RESET" })
        }
      >
        Reset
      </button>

    </div>
  );
}

export default StudentForm;