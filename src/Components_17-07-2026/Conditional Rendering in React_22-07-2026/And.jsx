// by using &&
function Profile() {
  const isAdmin = true;

  return (
    <div>
      <h1>My Website</h1>

      {isAdmin && <button>Admin Dashboard</button>}
    </div>
  );
}

export default Profile;