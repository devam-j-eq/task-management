import clsx from 'clsx';
import React from 'react';

const Button = ({icon, className, lable, type, onclick = () => {} }) => {
  return (
    <button
      type={type || "button"} className={clsx("px-3 py-2 outline-none", className)}>Submit
    
      <span>{lable}</span>
      {icon && icon}
  </button>
  );
};


export default Button;