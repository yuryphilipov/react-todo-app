import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addTask,
  completeTask,
  removeTask,
  changeFilter,
} from "./../../actions/actionCreator";

import TodoList from "./../../components/todo-list/todo-list";
import Footer from "./../../components/footer/footer";
import TodoInput from "../../components/todo-input/todo-input";

class ToDo extends Component {
  state = {
    taskText: "",
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    });
  };

  addTask = ({ key }) => {
    const { taskText } = this.state;
    if (taskText.length > 3 && key === "Enter") {
      const { addTask } = this.props;
      addTask(new Date().getTime(), taskText, false);

      this.setState({
        taskText: "",
      });
    }
  };

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case "completed":
        return tasks.filter((task) => task.isCompleted);
      case "active":
        return tasks.filter((task) => !task.isCompleted);
      default:
        return tasks;
    }
  };

  getActiveTasksCount = (tasks) =>
    tasks.filter((task) => !task.isCompleted).length;

  render() {
    const { taskText } = this.state;
    const {
      tasks,
      completeTask,
      removeTask,
      filters,
      changeFilter,
    } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = this.filterTasks(tasks, filters);
    const activeTasksCount = this.getActiveTasksCount(tasks);

    return (
      <div className='todo-wrapper'>
        <TodoInput
          onKeyPress={this.addTask}
          onChange={this.handleInputChange}
          value={taskText}
        />
        {isTasksExist && (
          <TodoList
            taskList={filteredTasks}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        )}
        {isTasksExist && (
          <Footer
            amount={activeTasksCount}
            activeFilter={filters}
            changeFilter={changeFilter}
          />
        )}
      </div>
    );
  }
}

export default connect(
  ({ tasks, filters }) => ({
    tasks,
    filters,
  }),
  { addTask, completeTask, removeTask, changeFilter }
)(ToDo);
