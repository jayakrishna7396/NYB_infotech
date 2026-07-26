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


// *by using if else
function Profile() {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <h1>Welcome User</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
}

export default Profile;

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

// function Profile(){
//     let [status,setstatus]=useState("new")
//     let [login,setloginpage]=usestate(false)
//     let [exist,setexist]=usestate(true )
//     return(
//         <div>
//         <div>
//             {/* <h1>welcome user</h1> */}
//         </div>
//         //ternary operator
//         {login ? <h1>Profile</h1> : exist? <login/> :<signup/>}

//         <div>
//             <p>
//                 if yoy are anew user? click
//             </p>
//             <button  onClick={()=>setexist(false))}> signup</button>
//         </div>
//         <p>
//             if you are a existing user? click
//         </p>
//         </div>
//             <h1>login page</h1>
//         </div>
//         <div>
//             <h1>signup</h1>
//         </div> */}
//         </div>
//     )
// }

// export default Profile




// // >siguppage
// // registration details
// // signuo button
// // if existing user then click on  login 

// // >login page
// // login details
// // login button
// // if use are a new user then click on signup

// // >profilr