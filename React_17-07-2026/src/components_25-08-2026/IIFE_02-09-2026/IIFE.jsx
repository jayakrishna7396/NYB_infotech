const IIFE = () => {
  const message = (() => {
    return "Hello from IIFE!";
  })();

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default IIFE;