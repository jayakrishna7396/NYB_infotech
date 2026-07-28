function Auth(WrappedComponent) {
  return function AuthComponent({ isLoggedIn, ...props }) {
    if (!isLoggedIn) {
      return (
        <>
          <h2>Access Denied</h2>
          <p>Please login to continue.</p>
        </>
      );
    }

    return <WrappedComponent {...props} />;
  };
}

export default Auth;