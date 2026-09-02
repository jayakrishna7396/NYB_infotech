const OptionalChaining = () => {
  const student = {
    name: "Jay",
    address: {
      city: "Rajahmundry"
    }
  };

  return (
    <div>
      <h2>Optional Chaining</h2>

      <p>Name: {student?.name}</p>

      <p>City: {student?.address?.city}</p>

      <p>Phone: {student?.phone?.number}</p>
    </div>
  );
};

export default OptionalChaining;