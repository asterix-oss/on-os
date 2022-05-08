import React from "react";
import { Desktop } from "../components/Desktop";
import { Layout } from "../components/Layout";
import { TaskBar } from "../components/TaskBar";

const Main = () => {
  return (
    <Layout>
      <Desktop />
      <TaskBar />
    </Layout>
  );
};

export default Main;
