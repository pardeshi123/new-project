// src/components/ToDoItem.jsx
import "../styles.css";

const ToDoItem = ({ task, toggleComplete, deleteTask, editTask }) => {
  return (
    <div className="todo-item">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleComplete(task.id)} 
      />
      <span className={task.completed ? 'completed' : ''}>
        {task.text}
      </span>
      <button onClick={() => editTask(task.id)} className="edit-btn">Edit</button>
      <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
    </div>
  );
};

export default ToDoItem;
