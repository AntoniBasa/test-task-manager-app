import React, { createContext, useState, PropsWithChildren,Dispatch,SetStateAction } from "react";

const AssigneeContext = createContext<string >('All');
const AssigneeDispatchContext = createContext<Dispatch<SetStateAction<string>>>(()=>undefined);

const AssigneeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [assignee, setAssignee] = useState<string >('All');

  return (
    <AssigneeContext.Provider value={assignee}>
      <AssigneeDispatchContext.Provider value={setAssignee}>
        {children}
      </AssigneeDispatchContext.Provider>
    </AssigneeContext.Provider>
  );
};

export { AssigneeProvider, AssigneeContext, AssigneeDispatchContext };