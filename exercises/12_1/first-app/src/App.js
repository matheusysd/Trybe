import React from 'react';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Task1', 'Task2', 'Task3', 'Task4']

const App = () => (tasks.map((element) => task(element)))

export default App;
