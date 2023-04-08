import React, { useContext, useState, useEffect } from "react";
import TabButton from "./TabButton";
import { AnalyticContext } from "../context/AnalyticProvider";
import { getAllTasks } from "../../api/getData";

const Tabs: React.FC = () => {
  const analytic = useContext(AnalyticContext);
  const [tabs, setTabs] = useState<[string, number][] | undefined>();

  useEffect(() => {
    if (analytic) {
      setTabs(Object.entries(analytic.assigneeStats));
    }
  }, [analytic]);

  return (
    <div className="tabs">
      <TabButton name="All" count={getAllTasks().length} />
      {tabs?.map((tab, idx) => (
        <TabButton key={idx} name={tab[0]} count={tab[1]} />
      ))}
    </div>
  );
};

export default Tabs;
