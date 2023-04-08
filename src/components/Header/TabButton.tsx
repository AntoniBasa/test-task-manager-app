import React, { useContext } from "react";
import {
  AssigneeContext,
  AssigneeDispatchContext,
} from "../context/AssigneeProvider";

type TabButtonPropsTypes = {
  name: string;
  count: number;
};

const TabButton: React.FC<TabButtonPropsTypes> = ({ name, count }) => {
  const assignee = useContext(AssigneeContext);
  const setAssignee = useContext(AssigneeDispatchContext);
  return (
    <div
      className={assignee === name ? "tab active" : "tab"}
      onClick={() => setAssignee(name)}
    >
      {name} <span className="tab-count">{count}</span>
    </div>
  );
};

export default TabButton;
