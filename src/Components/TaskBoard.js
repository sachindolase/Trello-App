import React from 'react';
import Task from './Task';

const TaskBoard = ({ tasks }) => {
  return (
    <div className="task-board">
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
};

export default TaskBoard;


