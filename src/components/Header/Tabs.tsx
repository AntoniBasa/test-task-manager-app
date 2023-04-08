import React, { useContext, useState, useEffect } from "react";
import TabButton from "./TabButton";
import { AnalyticContext } from "../context/AnalyticProvider";
import { getAllTasks } from "../../api/getData";

const Tabs: React.FC = () => {
  const analytic = useContext(AnalyticContext);
  const [tabs, setTabs] = useState<[string, number][] | undefined>();
  const allTasks = getAllTasks();

  useEffect(() => {
    if (analytic) {
      setTabs(Object.entries(analytic.assigneeStats));
    }
  }, [analytic]);

  return (
    <div className="tabs">
      <TabButton name="All" count={allTasks.length} />
      {tabs?.map(([tabName, count], idx) => (
        <TabButton key={idx} name={tabName} count={count} />
      ))}
    </div>
  );
};

export default Tabs;
