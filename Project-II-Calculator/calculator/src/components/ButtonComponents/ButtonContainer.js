import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';
import SideButton from './SideButton';
const ButtonContainer = props => {
    return (
      <div className="button-container">
        <SideButton text="clear" fontWeight="light" clicked={props.clicked} />
        {props.numbers.map((number, index) => {
          return (
            <NumberButton
              text={number}
              key={'number' + index}
              clicked={props.clicked}
            />
          );
        })}
  
        <SideButton text="0" clicked={props.clicked} />
      </div>
    );
  };
  
  export default ButtonContainer;
