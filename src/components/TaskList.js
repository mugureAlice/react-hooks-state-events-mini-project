import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory = "All", onDeleteTask }) {
  const filteredTasks =
    selectedCategory === "All" || !selectedCategory
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="tasks">
      {filteredTasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask(task)}
        />
      ))}
    </div>
  );
}

export default TaskList;