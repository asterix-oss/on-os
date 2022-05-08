import React from "react";
import "./Desktop.scss";

export interface DesktopProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Desktop: React.FC<DesktopProps> = ({ children, ...rest }) => {
  return (
    <div {...rest} className='on-desktop'>
      {/* <div className='on-desktop-apps'>
        {new Array(28).fill(20).map((_, index) => {
          return (
            <div className='on-desktop-app' key={index}>
              <div className='on-desktop-app-icon'>
                <img src='https://via.placeholder.com/50x50' alt='App Icon' />
              </div>
              <div className='on-desktop-app-name'>App</div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Desktop;
