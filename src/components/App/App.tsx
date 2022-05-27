import { MotionProps, motion } from "framer-motion";
import { CaretDown, FrameCorners, X } from "phosphor-react";
import React, { useContext, useState } from "react";
import { Navigation } from "../../context/NavigationContext";
import "./App.scss";

interface AppProps extends MotionProps {
  children: React.ReactNode;
}

export const App: React.FC<AppProps> = ({ children, ...rest }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  // const [cords, setCords] = useState({ x: 0, y: 0 });
  const { toggleTaskBar } = useContext(Navigation);

  const toggleFullscreen = () => {
    setIsFullScreen(!isFullScreen);
    toggleTaskBar(!isFullScreen);
  };

  return (
    <motion.div
      // onPan={(e, pointEvt) => {
      //   setCords({ x: pointEvt.point.x, y: pointEvt.point.y });
      // }}
      className='on-app'
      animate={{
        width: isFullScreen ? "100%" : "50vw",
        height: isFullScreen ? "100%" : "60vh",
      }}
      // style={{
      //   top: cords.y,
      //   left: cords.x,
      // }}
      transition={{
        duration: 0.2,
      }}
      {...rest}
    >
      <motion.div className='on-app-menu cursor-grab'>
        <div className='on-app-name'>Demo App</div>
        <div className='on-app-menu-group'>
          <div className='on-app-menu-section'>
            <div className='on-app-menu-item'>
              <div className='on-app-menu-item-icon' onClick={toggleFullscreen}>
                <FrameCorners color='white' />
              </div>
            </div>
            <div className='on-app-menu-item'>
              <div className='on-app-menu-item-icon'>
                <CaretDown color='white' />
              </div>
            </div>
            <div className='on-app-menu-item'>
              <div className='on-app-menu-item-icon'>
                <X color='white' />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div>{children}</div>
    </motion.div>
  );
};

export default App;
