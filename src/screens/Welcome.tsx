import { motion } from "framer-motion";
import { Button } from "../components/Button";

const Welcome = () => {
  return (
    <motion.div className='flex w-screen h-screen items-center justify-center'>
      <div className='bg-white flex flex-col items-center justify-center p-10 rounded-md text-dark max-w-3xl w-[48rem]'>
        <div className='font-bold text-3xl'>Choose Your Appearance</div>
        <div></div>
        <div className='grid grid-cols-3 gap-2 py-10'>
          <div className='w-full bg-red-500 p-6 rounded-md h-40 flex items-center justify-center'>
            Very Fast
          </div>
          <div className='w-full bg-red-500 p-6 rounded-md h-40 flex items-center justify-center'>
            Simple and friendly user-experience
          </div>
          <div className='w-full bg-red-500 p-6 rounded-md h-40 flex items-center justify-center'>
            Shipped with tools to make it easy to use
          </div>
        </div>
        <div className='w-full flex justify-end'>
          <Button>Next</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Welcome;
