import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {

  const [student, setStudent] = useState("Jaya");

  return (
    <UserContext.Provider
      value={{ student, setStudent }}
    >
      {children}
    </UserContext.Provider>
  );
}