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
  toggleTask = (id: string) => {
    this.setState({tasks : this.state.tasks.map(
        task => task.id === id ? {...task, checked: !task.checked } : task
      )})
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
            toggleTask ={this.toggleTask}
          />}
      </div>
    )
  }
}

export default App;
