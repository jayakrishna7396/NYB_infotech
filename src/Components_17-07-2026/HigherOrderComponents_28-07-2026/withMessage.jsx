function withMessage(WrappedComponent) {
  return function EnhancedComponent() {
    return (
      <>
        <h1>Welcome to My Application</h1>
        <WrappedComponent />
      </>
    );
  };
}

export default withMessage;