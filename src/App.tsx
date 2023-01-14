import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
// custom components
import CustomForm from './components/CustomForm';
import TaskList from './components/TaskList';
import EditForm from './components/EditForm';
import { Task } from './components/TaskType';
import  ThemeSwitcher  from './components/ThemeSwitcher';


const tempTask: Task = {
  name: "",
  checked: false,
  id: ""
}

const App = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(document.createElement('div') as HTMLElement);
  const [editedTask, setEditedTask] = useState(tempTask);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  }
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  const toggleTask = (id: string) => {
    setTasks(tasks.map(
      task => task.id === id ? {...task, checked: !task.checked } : task
    ));
  }
  const updateTask = (task: Task) => {
    setTasks(tasks.map( t => (
      t.id === task.id 
      ?{ ...t, name: task.name }
      : t
    )));
    closeEditMode();
  }
  const closeEditMode = () => {
    setIsEditing(false);
    if (previousFocusEl) {
      previousFocusEl.focus();
    }
  }
  const enterEditMode = (task: Task) => {
    setEditedTask(task);
    setIsEditing(true);
    if (document.activeElement instanceof HTMLElement) {
      setPreviousFocusEl(document.activeElement);
    }
  }


  return (
    <div className="container">
      <header>
        <h1>My Todo List Tracker</h1>
      </header>
      {
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )
      }
      <CustomForm addTask={addTask} /> 
      {tasks.length > 0 && 
        <TaskList 
          tasks={tasks} 
          deleteTask ={deleteTask}
          toggleTask ={toggleTask}
          enterEditMode={enterEditMode}
        />}
      <ThemeSwitcher/>
    </div>
  );
}


export default App;
