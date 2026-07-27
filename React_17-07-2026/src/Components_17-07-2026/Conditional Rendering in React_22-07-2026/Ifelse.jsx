// *by using if else
function Ifelse() {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <h1>Welcome User</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
}

export default Ifelse;