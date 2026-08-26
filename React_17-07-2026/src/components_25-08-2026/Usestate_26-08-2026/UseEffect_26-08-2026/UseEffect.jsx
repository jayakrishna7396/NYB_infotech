
function UseEffect() {

  useEffect(() => {
    console.log("Component loaded");
  }, []);

  return (
    <div>
      <h1>useEffect Example</h1>
      <p>Check the browser</p>
    </div>
  );
}

export default UseEffect;