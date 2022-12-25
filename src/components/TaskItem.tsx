import React from 'react';
import { Task } from './TaskType';

// styles
import styles from './TaskItem.module.css';

// Library imports
import { CheckIcon  } from '@heroicons/react/24/outline';
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

interface Props {
  task: Task;
}

class TaskItem extends React.Component<Props> {
  state = {
    isChecked: this.props.task.checked
  }

  handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  render() {
    const { task } = this.props;

    return (
      <li className={styles.task}>
        <div className={styles["task-group"]}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={this.state.isChecked}
            onChange={this.handleCheckboxChange}
            name={task.name}
            id={task.id.toString()}
          />
          <label
            htmlFor={task.id.toString()}
            className={styles.label}
          >
            {task.name}
            <p className={styles.checkmark}>
              <CheckIcon strokeWidth={2} width={24} height={24}/>
            </p>
          </label>
        </div>
        <div className={styles["task-group"]}>
          <button
            className='btn'
            aria-label={`Update ${task.name} Task`}
            // onClick={}
          >
            <PencilSquareIcon width={24} height={24} />
          </button>

          <button
            className={`btn ${styles.delete}`}
            aria-label={`Delete ${task.name} Task`}
            // onClick={}
          >
            <TrashIcon width={24} height={24} />
          </button>

        </div>
      </li>
    )
  }
}

export default TaskItem;
