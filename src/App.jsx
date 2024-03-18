import React, { useState } from 'react';
import Clock from './components/clock/Clock';
import ToDoList from './components/to-do-list/ToDoList';
import HamburgerMenu from './components/hamburger-menu/HamburgerMenu';
import './App.css';

function App() {
  const [currentProject, setCurrentProject] = useState('clock');

  const onChangeProject = (project) => {
    setCurrentProject(project);
  };

  return (
    <>
      <HamburgerMenu onChangeProject={onChangeProject} />
      {currentProject === 'clock' && <Clock />}
      {currentProject === 'todo' && <ToDoList />}
    </>
  );
}

export default App;
