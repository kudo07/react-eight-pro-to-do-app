import { useEffect, useState } from "react";
import "./App.css";
import TaksForm from "./components/TaksForm";
import Task from "./components/Task";
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // reading only if u save this then..=>
  }, [tasks]);
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
  }, []);
  const addTask = (name) => {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  };
  function removeTask(indexToRemove) {
    setTasks((prev) => {
      return prev.filter((teskObject, index) => index !== indexToRemove);
    });
  }
  const updateTaskDone = (taskIndex, newDone) => {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  };
  const numberComplete = tasks.filter((t) => t.done).length;
  const numberTotal = tasks.length;
  const getMessage = () => {
    const per = (numberComplete / numberTotal) * 100;
    if (per === 0) {
      return "Try to do at least one 😵";
    }
    if (per === 100) {
      return "Nice Job boblob🦾";
    }
    return "KEEP IT SIMPLE😎";
  };
  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }
  return (
    <main className="App">
      <h1>
        {numberComplete}/{numberTotal} COMPLETE
      </h1>
      <h2>{getMessage()}</h2>

      <TaksForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task
          {...task}
          onRename={(newName) => renameTask(index, newName)}
          onToggle={(done) => updateTaskDone(index, done)}
          onTrash={() => removeTask(index)}
        />
      ))}
    </main>
  );
}

export default App;
