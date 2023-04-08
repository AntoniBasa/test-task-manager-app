import React, { useState, useEffect, useContext } from "react";
import { FiPlus } from "react-icons/fi";
import TaskItem from "./TaskItem";
import { ITask } from "../types/data";
import { AssigneeContext } from "./context/AssigneeProvider";
import {
  getAllTasks,
  getAssigneeToTasks,
  getStatusFilteredTasks,
} from "../api/getData";

type StatusColumnPropsTypes = {
  statusName: string;
};

const StatusColumn: React.FC<StatusColumnPropsTypes> = ({ statusName }) => {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [newStatusName] = useState<string>(
    statusName
      .split(/(?=[A-ZА-Я])/)
      .join(" ")
      .toLowerCase());
  const assignee = useContext(AssigneeContext);
  const allTasks = getAllTasks();
  const assigneeTasks = getAssigneeToTasks(assignee);

  useEffect(() => {
    if (assignee === "All") {
      const res = getStatusFilteredTasks(allTasks, newStatusName);
      setTasks(res);
    } else {
      const res = getStatusFilteredTasks(assigneeTasks, newStatusName);
      setTasks(res);
    }
  }, [assignee]);

  return (
    <div className="status-column">
      <div className="status-column-title">
        <h2>
          {newStatusName} <span>({tasks.length})</span>
        </h2>
        <FiPlus className="status-column-title-icon" />
      </div>
      <div className="status-column-tasks-wrapper">
        {tasks.map((task, idx) => (
          <TaskItem key={idx} task={task} />
        ))}
      </div>
    </div>
  );
};

export default StatusColumn;
