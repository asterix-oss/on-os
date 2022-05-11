import { motion, MotionProps } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import "./ContextMenu.scss";

export interface ContextMenuProps extends MotionProps {}

const menuLists = [
  [
    {
      label: "Refresh",
    },
    {
      label: "Change Desktop Background",
    },
  ],
  [
    {
      label: "Sleep",
    },
    {
      label: "Logout",
    },
  ],
];

export const ContextMenu: React.FC<ContextMenuProps> = (props) => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const handleContextMenu = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      setShow(false);
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
    },
    [setAnchorPoint, setShow]
  );

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  if (!show) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: show ? 1 : 0,
      }}
      style={{
        top: anchorPoint.y,
        left: anchorPoint.x,
      }}
      className='on-context-menu'
      {...props}
    >
      {menuLists.map((menuList, index) => (
        <>
          {menuList.map((item, index) => (
            <div key={index} className='on-context-menu-item'>
              {item.label}
            </div>
          ))}
          <hr className='on-context-menu-divider' />
        </>
      ))}
      <div className='on-context-menu-item'>Exit</div>
    </motion.div>
  );
};

export default ContextMenu;
