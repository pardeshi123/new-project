// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./styles.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);

  const addTask = () => {
    if (!newTask.trim()) return;
    if (editingId) {
      setTasks(tasks.map(task => task.id === editingId ? { ...task, text: newTask } : task));
      setEditingId(null);
    } else {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    }
    setNewTask("");
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId) => {
    const taskToEdit = tasks.find(task => task.id === taskId);
    setNewTask(taskToEdit.text);
    setEditingId(taskId);
  };

  return (
    <div className="container">
      <Header />
      <div className="todo-container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask} className="add-btn">
            {editingId ? "Update" : "Add"}
          </button>
        </div>
        <ToDoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />
      </div>
    </div>
  );
};

export default App;
