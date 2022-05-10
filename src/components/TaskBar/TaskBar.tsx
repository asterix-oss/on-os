import moment from "moment";
import {
  Bell,
  CloudSun,
  Copy,
  MagnifyingGlass,
  SquaresFour,
} from "phosphor-react";
import React, { useContext } from "react";
import { Navigation } from "../../context/NavigationContext";
import "./TaskBar.scss";
import { motion, MotionProps } from "framer-motion";

export interface TaskBarProps extends MotionProps {
  children?: React.ReactNode;
}

export const TaskBar: React.FC<TaskBarProps> = (props) => {
  const { toggleDesktop, closeDesktop, isShowingDesktop } =
    useContext(Navigation);
  const [date, setDate] = React.useState(moment());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`on-taskbar ${
        isShowingDesktop ? "on-taskbar-showing-desktop" : ""
      }`}
      initial={{
        translateX: "50%",
        translateY: "0%",
      }}
      // animate={{
      //   translateY: isShowingDesktop ? "150%" : "0%",
      // }}
      transition={{
        duration: 0.2,
        ease: "easeIn",
      }}
      {...props}
    >
      <div className='on-taskbar-widget on-taskbar-main'>
        <div className='on-taskbar-tools'>
          <div className='on-taskbar-tool' onClick={toggleDesktop}>
            <SquaresFour color='white' size={20} />
          </div>
          <div className='on-taskbar-tool'>
            <MagnifyingGlass color='white' size={20} />
          </div>
          <div className='on-taskbar-tool'>
            <Copy color='white' size={20} />
          </div>
        </div>
        <div className='on-taskbar-apps'>
          {new Array(10).fill(20).map((_, index) => {
            return (
              <div
                className='on-taskbar-app'
                key={index}
                onClick={() => {
                  closeDesktop();
                }}
              >
                <div className='on-taskbar-app-icon'>
                  <img src='https://via.placeholder.com/50x50' alt='App Icon' />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='on-taskbar-widget'>
        <div className='on-taskbar-tool'>
          <CloudSun color='white' size={20} />
        </div>
        <div className='on-taskbar-tools'>
          <div className='on-taskbar-date-widget-date'>
            <div className='on-taskbar-date-widget-date-time'>
              {date.format("h:mm a")}
            </div>
            <div className='on-taskbar-date-widget-date-date'>
              {date.format("dddd, MMMM Do")}
            </div>
          </div>
        </div>
        <div className='on-taskbar-tool'>
          <Bell color='white' size={20} />
        </div>
      </div>
    </motion.div>
  );
};

export default TaskBar;
