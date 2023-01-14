import React, { Component } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import { Task } from '../utils/TaskType';
import {v4 as uuidv4} from 'uuid';

interface Props {
  addTask: (task: Task) => void;
}

class CustomForm extends Component<Props> {
  state = {
    task: '',
  }

  handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { addTask } = this.props;
    const { task } = this.state;
    addTask({
      name: task,
      checked: false,
      id: uuidv4(),
    });
    this.setState({ task: '' });
  }

  handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ task: (e.target as HTMLInputElement).value });
  }

  render() {
    const { task } = this.state;
    return (
      <form
        className="todo"
        onSubmit={this.handleFormSubmit}
      >
        <div className="wrapper">
          <input
            type="text"
            className="input"
            id="task"
            value={task}
            onInput={this.handleInput}
            required
            autoFocus
            maxLength={100}
            placeholder="Enter Task"
          />
          <label
            htmlFor="task"
            className="label"
          >
            Enter Task
          </label>
        </div>
        <button
          className="btn"
          aria-label="Add Task"
          type="submit"
        >
          <PlusIcon />
        </button>
      </form>
    );
  }
}

export default CustomForm;
