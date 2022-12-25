import React, { useState } from 'react';

// custom components
import CustomForm from './components/CustomForm';
import TaskList from './components/TaskList';
import { Task } from './components/TaskType';


class App extends React.Component {
  state = {
    tasks: [] as Task[]
  }

  addTask = (task: Task) => {
    this.setState({tasks : [...this.state.tasks,task]});
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>My Todo List Tracker</h1>
        </header>
        <CustomForm addTask={this.addTask} /> 
        {this.state.tasks && <TaskList tasks={this.state.tasks} />}
      </div>
    )
  }
}

export default App;
