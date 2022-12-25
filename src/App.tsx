import React, { Component } from 'react';

// custom components
import CustomForm from './components/CustomForm';
import { Task } from './components/TaskType';
interface State {
  tasks: Task[],
}

class App extends Component<{}, State> {
  state: State = {
    tasks: [],
  };

  addTask = (task: Task) => {
    this.setState(prevState => ({ tasks: [...prevState.tasks, task] }));
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="container">
        <header>
          <h1>My Todo List Tracker</h1>
        </header>
        <CustomForm addTask={this.addTask} />
        {/* {tasks.length > 0 && <TaskList tasks={tasks} />} */}
      </div>
    );
  }
}

export default App;
