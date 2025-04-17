//拖拉任務元件
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "../assets/css/TaskBoard.css";

const initialTasks = {
  todo: [
    { id: "task-1", content: "新增知識庫分類" },
    { id: "task-2", content: "設計排行榜介面" },
  ],
  inProgress: [{ id: "task-3", content: "完成拖拉任務功能" }],
  done: [{ id: "task-4", content: "整合 GPT 回答 API" }],
};

const TaskBoard = () => {
  const [columns, setColumns] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];
    const [movedTask] = sourceCol.splice(source.index, 1);
    destCol.splice(destination.index, 0, movedTask);

    setColumns({
      ...columns,
      [source.droppableId]: sourceCol,
      [destination.droppableId]: destCol,
    });
  };

  return (
    <div className="task-board-container">
      <h2>📝 任務看板</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="task-columns">
          {Object.entries(columns).map(([colId, tasks]) => (
            <Droppable droppableId={colId} key={colId}>
              {(provided) => (
                <div
                  className="task-column"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h3>
                    {colId === "todo"
                      ? "📌 待處理"
                      : colId === "inProgress"
                      ? "🚧 進行中"
                      : "✅ 已完成"}
                  </h3>
                  {tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="task-card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskBoard;
