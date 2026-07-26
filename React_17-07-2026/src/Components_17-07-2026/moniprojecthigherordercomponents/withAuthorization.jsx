function withAuthorization(
  WrappedComponent,
  allowedRole
) {

  return function AuthorizationComponent({
    userRole,
    ...props
  }) {

    if (userRole !== allowedRole) {
      return (
        <h2>
          Access Denied!
        </h2>
      );
    }

    return (
      <WrappedComponent {...props} />
    );
  };
}

export default withAuthorization;