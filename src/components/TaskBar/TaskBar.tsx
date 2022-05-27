import moment from "moment";
import "./TaskBar.scss";
import {
  Bell,
  CloudSun,
  Copy,
  MagnifyingGlass,
  SquaresFour,
  X,
} from "phosphor-react";
import React, { useContext } from "react";
import { Navigation } from "../../context/NavigationContext";
import { motion, MotionProps } from "framer-motion";

export interface TaskBarProps extends MotionProps {
  children?: React.ReactNode;
}

const notifications = [
  {
    title: "Notification 1",
    body: "This is a notification",
    dateNotified: new Date(),
  },
  {
    title: "Notification 2",
    body: "This is a notification",
    dateNotified: new Date(),
  },
  {
    title: "Notification 2",
    body: "This is a notification",
    dateNotified: new Date(),
  },
  {
    title: "Notification 2",
    body: "This is a notification",
    dateNotified: new Date(),
  },
  {
    title: "Notification 2",
    body: "This is a notification",
    dateNotified: new Date(),
  },
  {
    title: "Notification 2",
    body: "This is a notification",
    dateNotified: new Date(),
  },
  {
    title: "Notification 2",
    body: "This is a notification",
    dateNotified: new Date(),
  },
  {
    title: "Notification 2",
    body: "This is a notification",
    dateNotified: new Date(),
  },
  {
    title: "Notification 2",
    body: "This is a notification",
    dateNotified: new Date(),
  },
  {
    title: "Notification 2",
    body: "This is a notification",
    dateNotified: new Date(),
  },
];

export const TaskBar: React.FC<TaskBarProps> = (props) => {
  const { toggleDesktop, closeDesktop, isShowingTaskBar } =
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
        isShowingTaskBar ? "on-taskbar-showing-desktop" : ""
      }`}
      initial={{
        translateX: "50%",
        translateY: "0%",
      }}
      animate={{
        translateY: isShowingTaskBar ? "150%" : "0%",
      }}
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

export const NotificationMenu = () => {
  return (
    <div className='on-notification-menu'>
      <div className='flex justify-between'>
        <div className='close-btn'>
          <X size={20} />
        </div>
        <div className='clear-all'>Clear All</div>
      </div>
      {notifications.map((notification, index) => {
        return (
          <>
            <div className='on-notification-menu-item' key={index}>
              <div>
                <div className='on-notification-menu-item-title'>
                  {notification.title}
                </div>
                <div className='on-notification-menu-item-body'>
                  {notification.body}
                </div>
              </div>
              <div className='on-notification-menu-item-date'>
                {moment(notification.dateNotified).fromNow()}
              </div>
            </div>
            <hr className='menu-divider' />
          </>
        );
      })}
    </div>
  );
};

export default TaskBar;
