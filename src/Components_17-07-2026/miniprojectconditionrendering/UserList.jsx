import UserCard from "./UserCard";

function UserList({ users }) {

  // Empty state
  if (users.length === 0) {
    return (
      <h2>No users found.</h2>
    );
  }

  return (
    <div>

      <h2>User List</h2>

      {/* Dynamic Rendering using map() */}

      <div className="user-list">

        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))}

      </div>

    </div>
  );
}

export default UserList;