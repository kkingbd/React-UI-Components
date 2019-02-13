import React from 'react';
import './Button.css';

const SideButton = props => {
  return (
    <p className='button side-button' >
      {props.text}
    </p>
  );
};
export default SideButton;