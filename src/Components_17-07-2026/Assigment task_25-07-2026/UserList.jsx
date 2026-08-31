import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          age={user.age}
          city={user.city}
        />
      ))}
    </div>
  );
}

export default UserList;