import React, { useContext } from "react";
import { App } from "../../context/AppContext";
import { motion } from "framer-motion";
import "./Layout.scss";
import { animationConfiguration } from "../../screens/Loading";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children, ...rest }) => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 0.5 }}
    >
      <div {...rest} className='on-layout'>
        <Wallpaper />
        {children}
      </div>
    </motion.div>
  );
};

const Wallpaper = () => {
  const { wallpaper } = useContext(App);
  return <img src={wallpaper} alt='Wallpaper' className='wallpaper' />;
};

export default Layout;
