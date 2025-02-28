import React, { useState } from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, toggleComplete, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
      )}
      <div className="actions">
        <FaCheck className="icon check" onClick={() => toggleComplete(todo.id)} />
        <FaEdit className="icon edit" onClick={() => setIsEditing(true)} />
        <FaTrash className="icon delete" onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};

export default TodoItem;
