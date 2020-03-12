import React, { Component } from 'react';


class CalculatorContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: '0',
            waitingForOperand: false,
            result: null
        };
    }

    inputDigit(digit) {
        const { displayValue, waitingForOperand } = this.state;

        if (waitingForOperand) {
            this.setState({
                displayValue: displayValue + digit,
                waitingForOperand: false,
            });
        } else {
            this.setState({
                displayValue: displayValue === '0' ? String(digit) : displayValue + digit,
            });
        }
    }

    inputOperator(operator) {
        const { displayValue, waitingForOperand } = this.state;
        let lastDigitRegexp = /\d$/;
        let operatorRegexp = /[x÷\-+]$/;
        if (displayValue === '0') {
            return
        }
        else if (lastDigitRegexp.test(displayValue)){
            this.setState({
                displayValue: displayValue + operator,
                waitingForOperand: true
            });
        }
        else if (operatorRegexp.test(displayValue)) {
            console.log('test');
            this.setState({
                displayValue: displayValue.replace(operatorRegexp, operator),
                waitingForOperand: true
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

    inputPercent() {
        const { displayValue } = this.state;
        const currentValue = parseFloat(displayValue);

        if (currentValue === 0)
            return;

        const fixedDigits = displayValue.replace(/^-?\d*\.?/, '');
        const newValue = parseFloat(displayValue) / 100;

        this.setState({
            displayValue: String(newValue.toFixed(fixedDigits.length + 2)),
        });
    }

    toggleSign() {
        const { displayValue } = this.state;
        const newValue = parseFloat(displayValue) * -1;

        this.setState({
            displayValue: String(newValue),
        });
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
            waitingForOperand: false,
            result: null
        })
    }

    calculate(displayValue) {

    }

    render() {
        return (<div className="container">
            <h2 style={ { margin: 40, textAlign: 'center' } }>Simple calculator</h2>
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
                    <th colSpan="4" style={ {
                        border: '1px solid #ddd',
                        textAlign: 'right',
                        padding: 20,
                    } }>{ this.state.result }</th>
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
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.clearAll() }>
                            C
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.toggleSign() }>
                            +/-
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.inputPercent() }>
                            %
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.inputOperator('÷') }>
                            ÷
                        </button>
                    </td>
                </tr>
                <tr>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.inputDigit(7) }>
                            7
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.inputDigit(8) }>
                            8
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.inputDigit(9) }>
                            9
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.inputOperator('x') }>
                            x
                        </button>
                    </td>
                </tr>
                <tr>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.inputDigit(4) }>
                            4
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.inputDigit(5) }>
                            5
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.inputDigit(6) }>
                            6
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.inputOperator('-') }>
                            -
                        </button>
                    </td>
                </tr>
                <tr>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.inputDigit(1) }>
                            1
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.inputDigit(2) }>
                            2
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.inputDigit(4) }>
                            3
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.inputOperator('+') }>
                            +
                        </button>
                    </td>
                </tr>
                <tr>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ this.handleClick }>
                            ()
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.inputDigit(0) }>
                            0
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ () => this.inputDot() }>
                            .
                        </button>
                    </td>
                    <td style={ { border: '1px solid #ddd', textAlign: 'center', padding: 20 } }>
                        <button
                            className="btn"
                            style={ { margin: 20 } }
                            onClick={ this.handleClick }>
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
