import ApiInfo from "./components/ApiInfo";
import UserList from "./components/UserList";
import StatusCode from "./components/StatusCode";

function App() {
  return (
    <div className="app">
      <h1>API Fundamentals</h1>

      <ApiInfo />

      <UserList />

      <StatusCode />
    </div>
  );
}

export default App;