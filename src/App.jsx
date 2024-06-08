import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import KanbanBoard from './kanban Components/KanbanBoard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [theme, setTheme] = useState('light'); // Define theme state

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const initialTasks = {
    'To Do': [],
    'In Progress': [],
    'Done': []
  };

  const [tasks, setTasks] = useState(initialTasks);

  const moveTask = (task, source, destination) => {
    if (source === destination) return;

    const sourceTasks = tasks[source].filter(t => t !== task);
    const destinationTasks = [...tasks[destination], task];

    setTasks({
      ...tasks,
      [source]: sourceTasks,
      [destination]: destinationTasks
    });
  };

  const addTask = (newTask, selectedColumn) => {
    if (newTask.trim() === '') return;

    const updatedTasks = {
      ...tasks,
      [selectedColumn]: [...tasks[selectedColumn], newTask]
    };

    setTasks(updatedTasks);
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className={`grid-container ${theme}-theme`}>
      <Header OpenSidebar={OpenSidebar} toggleTheme={toggleTheme} theme={theme} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className='content'>
        <Home />
        <KanbanBoard tasks={tasks} moveTask={moveTask} addTask={addTask} className={`kanban-board ${theme}-theme`} />
      </div>
    </div>
  );
}

export default App;
