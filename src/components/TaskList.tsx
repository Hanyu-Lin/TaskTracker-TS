// component import
import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../utils/TaskType';

// styles
import styles from './TaskList.module.css';


interface Props {
  tasks: Task[],
  deleteTask: (id: string) => void,
  toggleTask: (id: string) => void,
  enterEditMode: (task: Task) => void

}

class TaskList extends React.Component<Props> {
  render() {
    const { tasks, deleteTask, toggleTask, enterEditMode } = this.props;

    return (
      <ul className={styles.tasks}>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask = {deleteTask}
            toggleTask = {toggleTask}
            enterEditMode = {enterEditMode}
          />
        ))
        }
      </ul>
    )
  }
}

export default TaskList;
