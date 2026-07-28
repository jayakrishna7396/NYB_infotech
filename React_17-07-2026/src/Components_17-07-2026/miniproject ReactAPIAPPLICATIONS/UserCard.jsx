import React from "react";

function UserCard({ user }) {
  console.log("UserCard Rendered:", user.name);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
}

export default React.memo(UserCard);