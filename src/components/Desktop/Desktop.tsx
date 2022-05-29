import React, { memo, useContext } from "react";
import "./Desktop.scss";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import { motion, MotionProps } from "framer-motion";
import "swiper/css";
import Swiper from "swiper";
import { AppsContext } from "../../context/AppsContext";
import { Navigation } from "../../context/NavigationContext";

export interface DesktopProps extends MotionProps {
  children?: React.ReactNode;
}

const Desktop: React.FC<DesktopProps> = ({ children, ...rest }) => {
  const [swiper, setSwiper] = React.useState<Swiper | null>(null);
  const [active, setActive] = React.useState(0);
  const { apps, openApp, resumeApp, openedApps } = useContext(AppsContext);
  const { closeDesktop } = useContext(Navigation);

  return (
    <motion.div className='on-desktop' {...rest}>
      <SwiperContainer
        spaceBetween={100}
        slidesPerView={1}
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={(swiper) => {
          setActive(swiper.activeIndex);
        }}
        className='flex-1 px-2 w-full'
      >
        {new Array(Math.ceil(apps.length / 24)).fill(0).map((_, i) => (
          <SwiperSlide key={i} className='on-desktop-apps relative'>
            <div
              className='w-full h-full absolute top-0 left-0'
              onClick={() => {
                closeDesktop();
              }}
            ></div>
            {apps.slice(i * 24, (i + 1) * 24).map((app, index) => {
              return (
                <div
                  className='on-desktop-app'
                  title={`${app.name} - ${app.description}`}
                  key={index}
                  onClick={() => {
                    closeDesktop();
                    openedApps.includes(app) ? resumeApp(app) : openApp(app);
                  }}
                >
                  <div className='on-desktop-app-icon'>
                    <img src={app.icon} alt='App Icon' />
                  </div>
                  <div className='on-desktop-app-name'>{app.name}</div>
                </div>
              );
            })}
          </SwiperSlide>
        ))}
      </SwiperContainer>
      <div className='on-desktop-tabs'>
        {new Array(swiper?.slides?.length || 0).fill(0).map((_, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                swiper?.slideTo(index);
              }}
              className={`on-desktop-tab ${
                active === index ? "on-desktop-tab-active" : ""
              }`}
            ></div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default memo(Desktop);
