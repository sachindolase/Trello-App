import React from 'react';
import TaskBoard from './TaskBoard';

const App = () => {
  const tasks = [
    { title: 'Task 1', description: 'Hello John' },
    { title: 'Task 2', description: 'Hello Kiran' },
    
  ];

  return (
    <div className="app">
      <TaskBoard tasks={tasks} />
    </div>
  );
};

export default App;



