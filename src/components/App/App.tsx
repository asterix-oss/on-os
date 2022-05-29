import { MotionProps, motion } from "framer-motion";
import { Circle } from "phosphor-react";
import React, { memo, useContext, useRef, useState } from "react";
import { App as AppType, AppsContext } from "../../context/AppsContext";
import { Navigation } from "../../context/NavigationContext";
import "./App.scss";

export interface AppProps extends AppType {
  motionProps?: MotionProps;
  key?: number;
}

const App: React.FC<AppProps> = (props) => {
  const { motionProps, name, isFullScreen: fullScreen, description } = props;
  const [isFullScreen, setIsFullScreen] = useState(fullScreen);
  const appContElRef = useRef<HTMLDivElement>(null);
  const { toggleTaskBar } = useContext(Navigation);
  const { closeApp, currentApp, resumeApp } = useContext(AppsContext);
  const [minimized, setMinimized] = useState(false);

  React.useEffect(() => {
    if (currentApp?.name === name) {
      setMinimized(false);
    }
  }, [currentApp, name]);

  const close = () => {
    closeApp(props);
    if (isFullScreen) {
      toggleTaskBar();
    }
  };

  const toggleFullscreen = () => {
    setIsFullScreen(!isFullScreen);
    toggleTaskBar(isFullScreen ? true : false);
  };

  const minimize: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setMinimized(true);
    resumeApp(null);
  };

  return (
    <motion.div
      // onPan={(e, pointEvt) => {
      //   setCords({ x: pointEvt.point.x, y: pointEvt.point.y });
      // }}
      className='on-app'
      onClick={() => {
        resumeApp(props);
      }}
      onDoubleClick={toggleFullscreen}
      initial={{
        x: "50%",
        y: "25%",
      }}
      animate={Object.assign(
        {
          width: isFullScreen ? "100%" : "50vw",
          height: isFullScreen ? "100%" : "60vh",
          background: props.theme?.backgroundColor || "",
          x: isFullScreen ? 0 : "50%",
          y: isFullScreen ? 0 : "25%",
        },
        isFullScreen && {
          borderRadius: 0,
          border: "none",
        },
        minimized && {
          translateY: window.innerHeight,
          scaleX: 0.1,
          skewX: "40deg",
        }
      )}
      exit={{
        opacity: 0,
      }}
      style={{
        width: isFullScreen ? "100%" : "50vw",
        height: isFullScreen ? "100%" : "60vh",

        zIndex: currentApp?.name === props.name ? 30 : props.key,
      }}
      // style={{
      //   top: cords.y,
      //   left: cords.x,
      // }}
      drag={!isFullScreen}
      dragMomentum={false}
      ref={appContElRef}
      transition={{
        duration: 0.1,
      }}
      {...motionProps}
    >
      <motion.div className='on-app-menu'>
        <div className='on-app-name' title={description}>
          {name}
        </div>
        <div className='on-app-menu-group'>
          <div className='on-app-menu-section'>
            <div className='on-app-menu-item' onClick={toggleFullscreen}>
              <div className='on-app-menu-item-icon' title='Expand'>
                <Circle size={14} color='#22c55e' weight='fill' />
              </div>
            </div>
            <div className='on-app-menu-item' onClick={minimize}>
              <div className='on-app-menu-item-icon' title='Minimize'>
                <Circle size={14} color='#facc15' weight='fill' />
              </div>
            </div>
            <div className='on-app-menu-item' onClick={close}>
              <div className='on-app-menu-item-icon' title='Close'>
                <Circle size={14} color='#ef4444' weight='fill' />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className='h-full overflow-scroll w-full'>
        <props.module {...props} />
      </div>
    </motion.div>
  );
};

export default memo(App);
