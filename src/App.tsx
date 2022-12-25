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
  deleteTask = (id: string) => {
    this.setState({tasks : this.state.tasks.filter(task => task.id !== id)})
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>My Todo List Tracker</h1>
        </header>
        <CustomForm addTask={this.addTask} /> 
        {this.state.tasks && 
          <TaskList 
            tasks={this.state.tasks} 
            deleteTask ={this.deleteTask}
          />}
      </div>
    )
  }
}

export default App;
