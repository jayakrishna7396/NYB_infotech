function ApiInfo() {
  return (
    <div className="card">
      <h2>What is an API?</h2>

      <p>
        API stands for Application Programming Interface.
        It allows two applications to communicate with each other.
      </p>

      <h3>Example</h3>

      <p>
        Our React application sends a request to an API server
        and receives user data.
      </p>

      <div className="flow">
        <p>React Application</p>
        <p>↓</p>
        <p>API Request</p>
        <p>↓</p>
        <p>Server</p>
        <p>↓</p>
        <p>API Response</p>
        <p>↓</p>
        <p>React Application</p>
      </div>
    </div>
  );
}

export default ApiInfo;