function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>

      <p>
        Email: {user.email}
      </p>

      <p>
        Phone: {user.phone}
      </p>

      <p>
        City: {user.address.city}
      </p>
    </div>
  );
}

export default UserCard;