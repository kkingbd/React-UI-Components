import React from 'react';
import './Button.css';
import OperatorButton from './OperatorButton';

const OperatorContainer = props => {
  return (
    <div className='operator-container'>
      {props.operators.map((operator, index) => {
        return (
          <OperatorButton text={operator} />
        );
      })}
    </div>

  );
};

export default OperatorContainer;