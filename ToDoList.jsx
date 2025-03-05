// src/components/ToDoList.jsx
import ToDoItem from "./ToDoItem";
import "../styles.css";

const ToDoList = ({ tasks, toggleComplete, deleteTask, editTask }) => {
  return (
    <div className="todo-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
};

export default ToDoList;
