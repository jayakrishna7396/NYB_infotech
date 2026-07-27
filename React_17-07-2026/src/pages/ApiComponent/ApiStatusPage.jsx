import ApiInfo from "../../topics of api/component/ApiInfo";
import StatusCode from "../../topics of api/component/StatusCode";
import UserList from "../../topics of api/component/UserList";


function ApiStatusPage() {
  return (
    <div className="app">
      <h1>API Fundamentals</h1>

      <ApiInfo />

      <UserList />

      <StatusCode/>
    </div>
  );
}

export default ApiStatusPage;