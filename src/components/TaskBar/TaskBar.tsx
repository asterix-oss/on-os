import moment from "moment";
import {
  Bell,
  CloudSun,
  Copy,
  MagnifyingGlass,
  SquaresFour,
} from "phosphor-react";
import React from "react";
import "./TaskBar.scss";

export interface TaskBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const TaskBar: React.FC<TaskBarProps> = (props) => {
  return (
    <div className='on-taskbar'>
      <div {...props} className='on-taskbar-widget on-taskbar-main'>
        <div className='on-taskbar-tools'>
          <div className='on-taskbar-tool'>
            <SquaresFour color='white' size={22} />
          </div>
          <div className='on-taskbar-tool'>
            <MagnifyingGlass color='white' size={22} />
          </div>
          <div className='on-taskbar-tool'>
            <Copy color='white' size={22} />
          </div>
        </div>
        <div className='on-taskbar-apps'>
          {new Array(10).fill(20).map((_, index) => {
            return (
              <div className='on-taskbar-app' key={index}>
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
          <CloudSun color='white' size={22} />
        </div>
        <div className='on-taskbar-tools'>
          <div className='on-taskbar-date-widget-date'>
            <div className='on-taskbar-date-widget-date-time'>
              {moment(new Date()).format("h:mm:ss a")}
            </div>
            <div className='on-taskbar-date-widget-date-date'>
              {moment(new Date()).format("dddd, MMMM Do")}
            </div>
          </div>
        </div>
        <div className='on-taskbar-tool'>
          <Bell color='white' size={22} />
        </div>
      </div>
    </div>
  );
};

export default TaskBar;
