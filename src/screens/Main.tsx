import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { App } from "../components/App";
import { ContextMenu } from "../components/ContextMenu";
import { Desktop } from "../components/Desktop";
import { Layout } from "../components/Layout";
import { TaskBar } from "../components/TaskBar";
import { AppsContext } from "../context/AppsContext";
import { Navigation } from "../context/NavigationContext";

const Main = () => {
  const { isShowingDesktop } = useContext(Navigation);
  const { openedApps } = useContext(AppsContext);
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
      <AnimatePresence>
        {openedApps.map((app, index) => {
          return <App key={index} {...app} />;
        })}
      </AnimatePresence>
      <TaskBar />
    </Layout>
  );
};

export default Main;
