import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ id, text, isCompleted, completeTask, removeTask }) => (
  <li className='todo-item'>
    <i
      className={
        isCompleted ? "mark far fa-check-square" : "mark far fa-square"
      }
      onClick={() => completeTask(id)}
    />
    <span className={isCompleted ? "completed text" : "text"}>{text}</span>
    <i className='fas fa-times' onClick={() => removeTask(id)} />
  </li>
);

TodoItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
};

TodoItem.defaultTypes = {
  id: 0,
  text: "",
  isCompleted: false,
};

export default TodoItem;
