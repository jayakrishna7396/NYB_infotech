function User({ name, email }) {
  return (
    <div>
      <h2>User Details</h2>

      <p>Name: {name}</p>

      <p>Email: {email}</p>
    </div>
  );
}

export default User;