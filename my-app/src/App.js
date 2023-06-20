import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [task, settasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksfromServer = await fetchTasks();
      settasks(tasksfromServer);
    };
    getTasks();
  }, []);
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/task");
    const data = await res.json();
    return data;
  };
  const addProject = async (newItem) => {
    let toAdd={
      id: Math.random(),
      name: newItem.project,
      description: newItem.description,
    }
    await fetch("http://localhost:5000/task", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body:JSON.stringify(toAdd)
    });
    settasks([
      ...task,
      {
        id: Math.random(),
        name: newItem.project,
        description: newItem.description,
      },
    ]);
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/task/${id}`, { method: "DELETE" });
    settasks(task.filter((item) => item.id !== id));
  };
  return (
    <div className="container">
      <Header title="LPS"></Header>
      <AddTask onAdd={addProject}></AddTask>
      {task.length > 0 ? (
        <Tasks task={task} onDelete={deleteTask}></Tasks>
      ) : (
        "No tasks to display"
      )}
    </div>
  );
}
export default App;
