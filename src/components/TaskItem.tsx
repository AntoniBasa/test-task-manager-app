import React from "react";
import { ITask } from "../types/data";

type TaskItemPropsTypes = {
  task: ITask;
};

const TaskItem: React.FC<TaskItemPropsTypes> = ({ task }) => {
  const dateStringArr = task.dueDate.toString().split(" ", 3);
  return (
    <div className="task">
      <h4>{task.title}</h4>
      <div className="task-bottom-container">
        <span>{`${dateStringArr[1]} ${dateStringArr[2]}`}</span>
        <span className="assignee">{task.assignee}</span>
      </div>
    </div>
  );
};

export default TaskItem;
