import logo from "../assets/svg/Logo.svg";
import { motion } from "framer-motion";
import { BarLoader } from "react-spinners";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Loading = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 5000);
  });

  return (
    <motion.div
      variants={animationConfiguration}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 1 }}
      className='relative h-screen w-screen flex flex-col justify-end items-center py-32'
    >
      <img
        src={logo}
        alt='logo'
        className='w-32 absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2'
      />
      <BarLoader color='white' />
    </motion.div>
  );
};

export default Loading;
