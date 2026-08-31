import React, { useState } from 'react'

function Profile() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome User</h1>
      ) : (
        <h1>Please Login</h1>
      )}
    </div>
  );
}

export default Profile;


// If isLoggedIn is true → Welcome User is displayed.
// If isLoggedIn is false → Please Login is display



