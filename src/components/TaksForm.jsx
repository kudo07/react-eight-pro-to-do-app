import { useState } from "react";

function TaksForm({ onAdd }) {
  const [taskName, setTaskName] = useState("");
  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button>+</button>
        <input
          type="text"
          placeholder="Your Next Task......"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default TaksForm;
