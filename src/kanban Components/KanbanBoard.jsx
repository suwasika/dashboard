import React from 'react';
import KanbanColumn from './KanbanColumn';

function KanbanBoard({ tasks, moveTask, addTask }) {
  return (
    <div className="kanban-board">
      {Object.keys(tasks).map((column) => (
        <KanbanColumn
          key={column}
          column={column}
          tasks={tasks[column]}
          moveTask={moveTask}
          addTask={addTask}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;
