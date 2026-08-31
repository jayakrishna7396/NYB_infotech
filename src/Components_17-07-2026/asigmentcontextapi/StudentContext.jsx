import { createContext, useContext, useState } from "react";

// Create Context
export const StudentContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Jaya",
    role: "Admin",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default StudentContext;