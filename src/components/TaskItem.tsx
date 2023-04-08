import React from "react";
import { ITask } from "../types/data";
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(LocalizedFormat)

type TaskItemPropsTypes = {
  task: ITask;
};


const TaskItem: React.FC<TaskItemPropsTypes> = ({ task }) => {
  return (
    <div className="task">
      <h4>{task.title}</h4>
      <div className="task-bottom-container">
        <span>{dayjs(task.dueDate).format('ll')}</span>
        <span className="assignee">{task.assignee}</span>
      </div>
    </div>
  );
};

export default TaskItem;
