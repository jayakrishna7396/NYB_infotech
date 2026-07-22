import { useReducer } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.value
      };

    case "SET_EMAIL":
      return {
        ...state,
        email: action.value
      };

    case "RESET":
      return {
        name: "",
        email: ""
      };

    default:
      return state;
  }
}

function Form() {
  const [state, dispatch] = useReducer(formReducer, {
    name: "",
    email: ""
  });

  return (
    <div>
      <h2>Form Handling</h2>

      <input
        type="text"
        placeholder="Enter Name"
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
        type="email"
        placeholder="Enter Email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "SET_EMAIL",
            value: e.target.value
          })
        }
      />

      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}

export default Form;