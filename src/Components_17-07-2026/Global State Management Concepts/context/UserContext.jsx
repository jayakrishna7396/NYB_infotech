
import { createContext, useState } from "react";

// Create Context
export const UserContext = createContext();

// Provider
export function UserProvider({ children }) {

  const [user, setUser] = useState("Jaya");

  return (
    <UserContext.Provider
      value={{ user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
}