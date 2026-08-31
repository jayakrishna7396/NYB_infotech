function Child2(props) {
  return (
    <div>
      <h2>Child 2</h2>

      <p>Received Message:</p>

      <h3>{props.message}</h3>
    </div>
  );
}

export default Child2;