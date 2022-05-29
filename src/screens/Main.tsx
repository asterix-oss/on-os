import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { AppsContext } from "../context/AppsContext";
import { Navigation } from "../context/NavigationContext";
const App = React.lazy(() => import("../components/App"));
const ContextMenu = React.lazy(() => import("../components/ContextMenu"));
const Desktop = React.lazy(() => import("../components/Desktop"));
const Layout = React.lazy(() => import("../components/Layout"));
const TaskBar = React.lazy(() => import("../components/TaskBar"));

const Main = () => {
  const { isShowingDesktop } = useContext(Navigation);
  const { openedApps } = useContext(AppsContext);
  return (
    <Layout>
      <React.Suspense fallback={<div></div>}>
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
      </React.Suspense>
    </Layout>
  );
};

export default Main;
