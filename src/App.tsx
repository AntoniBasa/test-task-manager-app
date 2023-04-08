import React from "react";
import Layout from "./components/Layout";
import { AnalyticProvider } from "./components/context/AnalyticProvider";
import { AssigneeProvider } from "./components/context/AssigneeProvider";
import TasksBoard from "./components/TasksBoard";

function App() {
  return (
    <div className="app">
      <AnalyticProvider>
        <AssigneeProvider>
          <Layout>
            <TasksBoard />
          </Layout>
        </AssigneeProvider>
      </AnalyticProvider>
    </div>
  );
}

export default App;
