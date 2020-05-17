import React from "react";
import PropTypes from "prop-types";

import TodoItem from "./../todo-item/todo-item";

const TodoList = ({ taskList, completeTask, removeTask }) => (
  <ul className='todo-list'>
    {taskList.map(({ id, text, isCompleted }) => (
      <TodoItem
        id={id}
        key={id}
        text={text}
        isCompleted={isCompleted}
        completeTask={completeTask}
        removeTask={removeTask}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  taskList: PropTypes.array,
  completeTask: PropTypes.func,
  removeTask: PropTypes.func,
};

TodoList.defaultTypes = {
  taskList: [],
  completeTask: () => {},
  removeTask: () => {},
};

export default TodoList;
