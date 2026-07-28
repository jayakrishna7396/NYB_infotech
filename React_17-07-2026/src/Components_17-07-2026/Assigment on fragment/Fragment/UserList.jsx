import useFetch from "../Hooks/UseFetch";

function UserList() {
  const {
    data,
    loading,
    error
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) {
    return <h2>Loading Users...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <>
      <h2>User List</h2>

      {data.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default UserList;