var React = require('react');
var moment = require('moment');

class TimePicker extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            defaultValue: null,
            step: null,
            name: null,
            beginLimit: null,
            endLimit: null,
            onChange: null,
        };
    }


    isEarlierThanEndLimit(timeValue, endLimit, lastValue) {
        let timeValueIsEarlier = moment(timeValue, 'h:mmA').diff(moment(endLimit, 'h:mmA')) < 0;
        let timeValueIsLaterThanLastValue = lastValue === undefined ? true : moment(lastValue, 'h:mmA').diff(moment(timeValue, 'h:mmA')) < 0;
        return timeValueIsEarlier && timeValueIsLaterThanLastValue;
    }

    render () {
        let timeValue = this.props.beginLimit || "08:00AM";
        let lastValue;
        let endLimit = this.props.endLimit || "11:59PM";
        let step = this.props.step || 15;

        let options = [];
        options.push(<option key={timeValue} value={timeValue}>{timeValue}</option>);

        while ( this.isEarlierThanEndLimit(timeValue, endLimit, lastValue) ) {
            lastValue = timeValue;
            timeValue = moment(timeValue, 'h:mmA').add(step, 'minutes').format('h:mmA');
            options.push(<option key={timeValue} value={timeValue}>{timeValue}</option>)
        }
        return(
            <select defaultValue={this.props.defaultValue} onChange={this.props.onChange} name={this.props.name}>
                {options}
            </select>
        )
    }
}

export default TimePicker;
