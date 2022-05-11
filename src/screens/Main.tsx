import React, { useContext } from "react";
import { ContextMenu } from "../components/ContextMenu";
import { Desktop } from "../components/Desktop";
import { Layout } from "../components/Layout";
import { TaskBar } from "../components/TaskBar";
import { Navigation } from "../context/NavigationContext";

const Main = () => {
  const { isShowingDesktop } = useContext(Navigation);
  return (
    <Layout>
      <ContextMenu />
      <Desktop
        initial={{
          display: "flex",
          opacity: 0,
          scale: 1.05,
        }}
        animate={{
          opacity: isShowingDesktop ? 1 : 0,
          scale: isShowingDesktop ? 1 : 1.05,
          display: isShowingDesktop ? "flex" : "none",
        }}
        transition={{
          duration: 0.08,
          ease: "easeInOut",
        }}
      />
      <TaskBar />
    </Layout>
  );
};

export default Main;
