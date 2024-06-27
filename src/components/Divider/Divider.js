import React from 'react';
import './Divider.css';

const Divider = ({ clsName }) => {
  let newClassName = "";
  if (clsName)
    newClassName = clsName + " divider";
  else
    newClassName = "divider";
  return (
    <div className={newClassName}>
    </div>
  );
};

export default Divider;
