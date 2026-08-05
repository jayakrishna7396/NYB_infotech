

function UserDetails() {

  const { userId } = useParams();

  return (
    <div>

      <h1>User Details</h1>

      <h2>User ID: {userId}</h2>

      <p>
        You are viewing the details of User {userId}.
      </p>

    </div>
  );
}

export default UserDetails;