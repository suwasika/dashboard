import React, { useState } from 'react';
import KanbanTask from './KanbanTask';

function KanbanColumn({ column, tasks, moveTask, addTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    addTask(newTask, column);
    setNewTask('');
  };

  return (
    <div className="kanban-column">
      <h3>{column}</h3>
      {tasks.map((task, index) => (
        <KanbanTask key={index} task={task} column={column} moveTask={moveTask} />
      ))}
      <div className="add-task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
}

export default KanbanColumn;
