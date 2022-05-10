import React from "react";
import "./Desktop.scss";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import { motion, MotionProps } from "framer-motion";
import "swiper/css";
import Swiper from "swiper";

export interface DesktopProps extends MotionProps {
  children?: React.ReactNode;
}

export const Desktop: React.FC<DesktopProps> = ({ children, ...rest }) => {
  const [swiper, setSwiper] = React.useState<Swiper | null>(null);
  const [active, setActive] = React.useState(0);

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
        <SwiperSlide className='on-desktop-apps'>
          {new Array(24).fill(20).map((_, index) => {
            return (
              <div className='on-desktop-app' key={index}>
                <div className='on-desktop-app-icon'>
                  <img src='https://via.placeholder.com/50x50' alt='App Icon' />
                </div>
                <div className='on-desktop-app-name'>Application</div>
              </div>
            );
          })}
        </SwiperSlide>
        <SwiperSlide className='on-desktop-apps'>
          {new Array(18).fill(20).map((_, index) => {
            return (
              <div className='on-desktop-app' key={index}>
                <div className='on-desktop-app-icon'>
                  <img src='https://via.placeholder.com/50x50' alt='App Icon' />
                </div>
                <div className='on-desktop-app-name'>Application</div>
              </div>
            );
          })}
        </SwiperSlide>
      </SwiperContainer>
      <div className='on-desktop-tabs'>
        {new Array(swiper?.slides.length || 0).fill(0).map((_, index) => {
          return (
            <div
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

export default Desktop;
