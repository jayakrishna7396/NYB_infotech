function StatusCode() {
  return (
    <div className="card">
      <h2>HTTP Status Codes</h2>

      <p>
        <strong>200 OK:</strong> Request was successful.
      </p>

      <p>
        <strong>201 Created:</strong> New data was created.
      </p>

      <p>
        <strong>400 Bad Request:</strong> Request was invalid.
      </p>

      <p>
        <strong>401 Unauthorized:</strong> Authentication is required.
      </p>

      <p>
        <strong>404 Not Found:</strong> Resource was not found.
      </p>

      <p>
        <strong>500 Server Error:</strong> Server encountered an error.
      </p>
    </div>
  );
}

export default StatusCode;