import React, { useState } from 'react';

// custom components
import CustomForm from './components/CustomForm';
import TaskList from './components/TaskList';
import EditForm from './components/EditForm';
import { Task } from './components/TaskType';

const tempTask: Task = {
  name: "",
  checked: false,
  id: ""
}
class App extends React.Component {
  state = {
    tasks: [] as Task[],
    previousFocusEl: document.createElement('div'),
    editedTask: tempTask,
    isEditing: false
  };

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
  updateTask = (task: Task) => {
    this.setState({tasks: this.state.tasks.map( t => (
      t.id === task.id 
      ?{ ...t, name: task.name }
      : t
    ))});
    this.closeEditMode();
  }
  closeEditMode = () => {
    this.setState({ isEditing: false });
    if (this.state.previousFocusEl) {
      this.state.previousFocusEl.focus();
    }
  }
  enterEditMode = (task: Task) => {
    this.setState({ editedTask: task, isEditing: true, previousFocusEl: document.activeElement });
  }

  render() {
    const { tasks, isEditing, editedTask } = this.state;
    return (
      <div className="container">
        <header>
          <h1>My Todo List Tracker</h1>
        </header>
        {
          isEditing && (
            <EditForm
              editedTask={editedTask}
              updateTask={this.updateTask}
              closeEditMode={this.closeEditMode}
            />
          )
        }
        <CustomForm addTask={this.addTask} /> 
        {this.state.tasks && 
          <TaskList 
            tasks={this.state.tasks} 
            deleteTask ={this.deleteTask}
            toggleTask ={this.toggleTask}
            enterEditMode={this.enterEditMode}
          />}
      </div>
    )
  }
}

export default App;
