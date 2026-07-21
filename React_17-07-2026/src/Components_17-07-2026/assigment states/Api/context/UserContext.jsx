import { createContext, useContext } from "react";

// Create Context
const UserContext = createContext();

// Create Provider
export function UserProvider({ children }) {
  const user = {
    name: "Jaya",
    email: "jayakrishna@email.com",
    role: "Student",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

// Consume Context
export function useUser() {
  return useContext(UserContext);
}