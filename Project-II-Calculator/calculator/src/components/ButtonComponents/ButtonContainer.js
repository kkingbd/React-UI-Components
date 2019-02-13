import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import SideButton from './SideButton';
const ButtonContainer = props => {
    return (
      <div className="button-container">
        <  SideButton text="clear" />
        {props.numbers.map((number, index) => {
          return (
          <  NumberButton text= {number}   />
          );
        })}
        < SideButton  />
      </div>
    );
  };
  export default ButtonContainer;
