import React from 'react';
import { Task } from './TaskType';

// library imports
import { CheckIcon } from '@heroicons/react/24/solid';

interface Props {
  editedTask: Task,
  updateTask: (task: Task) => void,
  closeEditMode: () => void
}

class EditForm extends React.Component<Props> {
  state = {
    updatedTaskName: this.props.editedTask.name
  }

  componentDidMount() {
    window.addEventListener('keydown', this.closeModalIfEscaped);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalIfEscaped);
  }

  closeModalIfEscaped = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      this.props.closeEditMode();
    }
  }

  handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.updateTask({...this.props.editedTask, name: this.state.updatedTaskName});
  }

  render() {
    return (
      <div
        role="dialog"
        aria-labelledby="editTask"
        onClick={(e) => {e.target === e.currentTarget && this.props.closeEditMode()}}
        >
        <form
          className="todo"
          onSubmit={this.handleFormSubmit}
          >
          <div className="wrapper">
            <input
              type="text"
              id="editTask"
              className="input"
              value={this.state.updatedTaskName}
              onInput={(e) => this.setState({updatedTaskName: (e.target as HTMLInputElement).value})}
              required
              autoFocus
              maxLength={60}
              placeholder="Update Task"
            />
            <label
              htmlFor="editTask"
              className="label"
            >Update Task</label>
          </div>
          <button
            className="btn"
            aria-label={`Confirm edited task to now read ${this.state.updatedTaskName}`}
            type="submit"
            >
            <CheckIcon strokeWidth={2} height={24} width={24} />
          </button>
        </form>
      </div>
    )
  }
}

export default EditForm;
