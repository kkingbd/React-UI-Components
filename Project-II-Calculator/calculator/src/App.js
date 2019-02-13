import React, {Component} from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import OperatorContainer from './components/ButtonComponents/OperatorContainer';

const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1'];
const operators = ['÷', 'x', '-', '+', '='];

class App extends React.Component{
   render(){
     return(
        <div className = 'container'>
            <CalculatorDisplay display = {0} />
            <ButtonContainer numbers = {numbers} />
            <OperatorContainer operators = {operators}  />
        </div>
     );
   }
}
export default App;