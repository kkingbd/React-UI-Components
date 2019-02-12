import React from 'react';
import './Button.css';

const SideButton = props => {
  return (
    <p
      className={`button side-button ${props.fontWeight}`}
      onClick={props.clicked}
    >
      {props.text}
    </p>
  );
};

export default SideButton;