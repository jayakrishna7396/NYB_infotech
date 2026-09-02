import ProtectedRoute from "../../components_25-08-2026/ProtectedRouter_31-08-2026/ProtectedRoute";


const ProtectedRoutingpage = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Protected Dashboard</h1>
        <p>Only logged-in users can see this page.</p>
      </div>
    </ProtectedRoute>
  );
};

export default ProtectedRoutingpage;