import { createContext, useState } from "react";

// Create Context
export const UserContext = createContext();

function UserProvider({ children }) {

  const [name, setName] = useState("Krishna");

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;