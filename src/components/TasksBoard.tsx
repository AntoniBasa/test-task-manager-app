import React, { useContext, useState, useEffect } from "react";
import StatusColumn from "./StatusColumn";
import { AnalyticContext } from "./context/AnalyticProvider";

const TasksBoard: React.FC = () => {
  const analytic = useContext(AnalyticContext);
  const [statuses, setStatuses] = useState<[string, number][] | undefined>();

  useEffect(() => {
    if (analytic) {
      setStatuses(Object.entries(analytic.taskStatus));
    }
  }, [analytic]);

  return (
    <div className="board">
      {statuses?.map(([statusName], idx) => (
        <StatusColumn key={idx} statusName={statusName}/>
      ))}
    </div>
  );
};

export default TasksBoard;
