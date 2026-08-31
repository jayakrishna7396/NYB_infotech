import { createContext, useContext } from "react";

// Create User Context
const UserContext = createContext();

// Create User Provider
export function UserProvider({ children }) {
  // User Information
  const user = {
    name: "Jaya Krishna",
    email: "jaya@example.com",
    role: "React Student",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

// Custom Hook to use User Context
export function useUser() {
  return useContext(UserContext);
}