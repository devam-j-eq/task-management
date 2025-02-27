import clsx from 'clsx';
import React from 'react';

const Button = ({icon, className, lable, type, onClick = () => {} }) => {
  return (
    <button onClick={onClick}
      type={type || "button"} className={clsx("px-3 py-2 outline-none", className)}>Login
    
      <span>{lable}</span>
      {icon && icon}
  </button>
  );
};


export default Button;