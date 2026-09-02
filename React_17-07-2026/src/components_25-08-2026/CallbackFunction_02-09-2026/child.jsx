const Child = ({ onMessage }) => {
  return (
    <div>
      <h2>Child Component</h2>

      <button onClick={onMessage}>
        Send Message
      </button>
    </div>
  );
};

export default Child;