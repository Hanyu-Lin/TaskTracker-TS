// component import
import React from 'react';
import TaskItem from './TaskItem';

// styles
import styles from './TaskList.module.css';
import { Task } from './TaskType';

interface Props {
  tasks: Task[];
}

class TaskList extends React.Component<Props> {
  render() {
    const { tasks } = this.props;

    return (
      <ul className={styles.tasks}>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))
        }
      </ul>
    )
  }
}

export default TaskList;
