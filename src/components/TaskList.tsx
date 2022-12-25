// component import
import React from 'react';
import TaskItem from './TaskItem';

// styles
import styles from './TaskList.module.css';
import { Task } from './TaskType';

interface Props {
  tasks: Task[];
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;


}

class TaskList extends React.Component<Props> {
  render() {
    const { tasks, deleteTask, toggleTask } = this.props;

    return (
      <ul className={styles.tasks}>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask = {deleteTask}
            toggleTask = {toggleTask}
          />
        ))
        }
      </ul>
    )
  }
}

export default TaskList;
