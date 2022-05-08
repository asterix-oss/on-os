import React from "react";
import "./Button.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { size } = props;
  return (
    <button
      className={["on-button", `on-button--${size}`].join(" ")}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
