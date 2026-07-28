import Loading from "../components/Loading";

function withLoading(WrappedComponent) {
  return function LoadingComponent({
    isLoading,
    ...props
  }) {
    if (isLoading) {
      return <Loading />;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withLoading;