function withLoading(WrappedComponent) {

  return function LoadingComponent({
    isLoading,
    ...props
  }) {

    if (isLoading) {

      return (
        <div className="loading">
          <div className="spinner"></div>

          <p>
            Loading users...
          </p>
        </div>
      );
    }

    return (
      <WrappedComponent
        {...props}
      />
    );
  };
}

export default withLoading;