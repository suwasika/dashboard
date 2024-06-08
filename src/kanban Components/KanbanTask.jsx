import React from 'react';

function KanbanTask({ task, column, moveTask }) {
  return (
    <div className="kanban-task">
      <p>{task}</p>
      <div className="task-buttons">
        {column !== 'To Do' && (
          <button onClick={() => moveTask(task, column, 'To Do')}>To Do</button>
        )}
        {column !== 'In Progress' && (
          <button onClick={() => moveTask(task, column, 'In Progress')}>In Progress</button>
        )}
        {column !== 'Done' && (
          <button onClick={() => moveTask(task, column, 'Done')}>Done</button>
        )}
      </div>
    </div>
  );
}

export default KanbanTask;
