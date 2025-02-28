import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, editTodo, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty">No tasks added yet!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
