import React, { Component } from 'react';

const isPrime = num => {
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
};

const getLargestPrimeNumber = (startNumber,endNumber) => {

    if (endNumber <= startNumber) {
        alert('The end number should be higher than start number')
    }

    let primeNumbers = [];

    for(let i = Math.floor(startNumber); i < Math.floor(endNumber); i++){
        if (isPrime(i)) {
            primeNumbers.push(i)
        }
    }
    return Math.max(...primeNumbers);
};

const CalculatorOperations = {
    '÷': (prevValue, nextValue) => prevValue / nextValue,
    'x': (prevValue, nextValue) => prevValue * nextValue,
    '+': (prevValue, nextValue) => prevValue + nextValue,
    '-': (prevValue, nextValue) => prevValue - nextValue,
    '%': (prevValue, nextValue) => prevValue % nextValue,
    'P': getLargestPrimeNumber,
    '=': (prevValue, nextValue) => nextValue
};



class CalculatorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: '0',
            operator: null,
            primeNumberResult: null,
        };
    }

    inputDigit(digit) {
        const { displayValue } = this.state;
        this.setState({
            displayValue: displayValue === '0' ? String(digit) : displayValue + digit,
        });
    }

    inputOperator(value) {
        const { displayValue,operator } = this.state;
        let lastDigitRegexp = /\d$/;
        let operatorRegexp = /[x÷\-+]$/;
        if (displayValue === '0' || operator) {
            return
        }
        else if (lastDigitRegexp.test(displayValue)){
            this.setState({
                displayValue: displayValue + value,
                operator: value
            });
        }
        else if (operatorRegexp.test(displayValue)) {
            this.setState({
                displayValue: displayValue.replace(operatorRegexp, value),
                operator: value
            });
        }
    }

    inputDot() {
        const { displayValue } = this.state;
        if (!(/\./).test(displayValue)) {
            this.setState({
                displayValue: displayValue + '.',
                waitingForOperand: false,
            });
        }
    }

    clearLastChar() {
        const { displayValue } = this.state;
        this.setState({
            displayValue: displayValue.substring(0, displayValue.length - 1) || '0'
        })
    }

    clearAll() {
        this.setState({
            displayValue: '0',
            operator: null,
        })
    }

    calculate() {
        const { displayValue,operator } = this.state;
        const regex = /\d+(\.\d+)?/g;

        const matches = displayValue.match(regex);
        const firstValue = parseFloat(matches[0]);
        const secondValue =  parseFloat(matches[1]);

        this.setState({
            displayValue:  String(CalculatorOperations[operator](firstValue,secondValue)),
            operator: null,
        });
    }

    render() {
        return (<div className="container">
            <h2 style={ { margin: 40, textAlign: 'center' } }>Simple calculator</h2>
            <p style={ { margin: 40, textAlign: 'center' } }>Below "P" is the operator to get the largest prime number between A and B,  for example, 1P9  return largest prime number 7 between 1 and 9</p>
            <table style={ { border: '1px solid #ddd', textAlign: 'center', width: '50%', margin: '0 auto' } }>
                <tbody>
                <tr>
                    <th colSpan="4" style={ {
                        border: '1px solid #ddd',
                        textAlign: 'right',
                        padding: 20,
                    } }>{ this.state.displayValue }</th>
                </tr>
                <tr>
                    <th colSpan="4" style={ { border: '1px solid #ddd', textAlign: 'right', padding: 5 } }>
                        <button
                            className="btn"
                            style={ { margin: 5 } }
                            onClick={ () => this.clearLastChar() }>
                            DEL
                        </button>
                    </th>
                </tr>
                <tr>
                    <td colSpan="2" style={ { border: '1px solid #ddd', textAlign: 'center'} }>
                        <button
                            className="btn btn-lg"
                            style={ { width:'100%' } }
                            onClick={ () => this.clearAll() }>
                            C
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center'} }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputOperator('%') }>
                            %
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center'} }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputOperator('÷') }>
                            ÷
                        </button>
                    </td>
                </tr>
                <tr>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputDigit(7) }>
                            7
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputDigit(8) }>
                            8
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputDigit(9) }>
                            9
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputOperator('x') }>
                            x
                        </button>
                    </td>
                </tr>
                <tr>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputDigit(4) }>
                            4
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputDigit(5) }>
                            5
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputDigit(6) }>
                            6
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputOperator('-') }>
                            -
                        </button>
                    </td>
                </tr>
                <tr>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputDigit(1) }>
                            1
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputDigit(2) }>
                            2
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputDigit(3) }>
                            3
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputOperator('+') }>
                            +
                        </button>
                    </td>
                </tr>
                <tr>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputOperator('P') }>
                            P
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputDigit(0) }>
                            0
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.inputDot() }>
                            .
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { width:'100%' } }
                            onClick={ () => this.calculate() }>
                            =
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>);
    }
}


export default CalculatorContainer;
