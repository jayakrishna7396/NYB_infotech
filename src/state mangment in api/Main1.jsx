import UserProvider from "./context/UserContext";
import Home from "./Home";


function Main1() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
}

export default Main1;