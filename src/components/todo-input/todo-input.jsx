import React from "react";
import PropTypes from "prop-types";

const TodoInput = ({ value, onChange, onKeyPress }) => {
  return (
    <div className='todo-input-wrapper'>
      {/* <i className='fas fa-plus' /> */}
      <input
        className='todo-input'
        placeholder='Add task and press Enter'
        onChange={onChange}
        onKeyPress={onKeyPress}
        value={value}
      />
    </div>
  );
};

TodoInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
};

TodoInput.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: "",
};

export default TodoInput;
