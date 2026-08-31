function withLoading(WrappedComponent) {
  return function LoadingComponent({
    isLoading,
    ...props
  }) {

    if (isLoading) {
      return <h2>Loading users...</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withLoading;