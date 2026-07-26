function UserList({ users }) {

  // Conditional rendering for empty data
  if (users.length === 0) {
    return <h2>No users found</h2>;
  }

  return (
    <div>
      <h2>User List</h2>

      {/* map() method */}

      {users.map((user) => (
        <div className="user-card" key={user.id}>

          <h3>{user.name}</h3>

          <p>Email: {user.email}</p>

          <p>Phone: {user.phone}</p>

          <p>City: {user.address.city}</p>

        </div>
      ))}
    </div>
  );
}

export default UserList;