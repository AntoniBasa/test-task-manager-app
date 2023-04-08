import React, { createContext, useState, PropsWithChildren,useEffect } from "react";
import { IAnalytics } from "../../types/data";
import { getAnalytics } from "../../api/getData";

const AnalyticContext = createContext<IAnalytics|undefined>(undefined);

const AnalyticProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [analytic, setAnalytic] = useState<IAnalytics | undefined>();
useEffect(()=>{
  setAnalytic(getAnalytics())
},[])
  return (
    <AnalyticContext.Provider value={analytic}>
        {children}
    </AnalyticContext.Provider>
  );
};

export { AnalyticProvider, AnalyticContext };
