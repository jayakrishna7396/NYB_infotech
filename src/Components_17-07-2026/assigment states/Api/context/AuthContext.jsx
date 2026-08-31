import { createContext, useContext, useState } from "react";

// Create Context
const AuthContext = createContext();

// Create Provider
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Consume Context
export function useAuth() {
  return useContext(AuthContext);
}