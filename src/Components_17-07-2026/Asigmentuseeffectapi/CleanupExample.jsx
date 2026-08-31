import { useEffect, useState } from "react";

function CleanupExample() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <h2>Cleanup Function Example</h2>

      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Stop Timer" : "Start Timer"}
      </button>

      {showTimer && <Timer />}
    </div>
  );
}

function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer is running...");
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer);
      console.log("Timer stopped");
    };
  }, []);

  return <p>Timer is running. Check the browser console.</p>;
}

export default CleanupExample;