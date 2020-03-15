import React from 'react';
import TimePicker from './TimePicker';

class CreateConferenceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            startTime: '08:00AM',
            endTime: '06:00PM',
            date: null,
            address: '',
            roomName: '',
            city: '',
            content: null,
            roomAvailability: 0,
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
        this.handleRoomNameChange = this.handleRoomNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleRoomAvailabilityChange = this.handleRoomAvailabilityChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleStartTimeChange(event) {
        this.setState({ startTime: event.target.value });
    }

    handleEndTimeChange(event) {
        this.setState({ endTime: event.target.value });
    }

    handleRoomNameChange(event) {
        this.setState({ roomName: event.target.value });
    }

    handleAddressChange(event) {
        this.setState({ address: event.target.value });
    }

    handleCityChange(event) {
        this.setState({ city: event.target.value });
    }

    handleRoomAvailabilityChange(event) {
        this.setState({ roomAvailability: event.target.value });
    }

    handleDateChange(event) {
        this.setState({ date: event.target.value });
    };

    handleContentChange(event) {
        this.setState({ content: event.target.value });
    };

    handleSubmit(event) {
        event.preventDefault();
        this.props.onCreate(this.state);
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit } className="needs-validation" style={ { margin: 20 } }>
                <div className="form-group">
                    <label>
                        Conference Name:
                        <input type="text" value={ this.state.name } className="form-control" onChange={ this.handleNameChange }/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Date:
                        <input type="date" name="date" className="form-control"
                               onChange={ this.handleDateChange }/>
                    </label>
                </div>
                <div className="form-group">
                    <TimePicker
                        beginLimit={ this.state.startTime }
                        onChange={ this.handleStartTimeChange }
                    />
                </div>
                <div className="form-group">
                    <TimePicker
                        beginLimit={ this.state.endTime }
                        onChange={ this.handleEndTimeChange }
                    />
                </div>
                <div className="form-group">
                    <label>
                        Room name:
                        <input type="text" name="room name" value={ this.state.roomName } className="form-control" onChange={ this.handleRoomNameChange }/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Address:
                        <input type="text" name="address" value={ this.state.address } className="form-control" onChange={ this.handleAddressChange }/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        City:
                        <input type="text" name="city" value={ this.state.city } className="form-control" onChange={ this.handleCityChange }/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Max seats:
                        <input type="number" name="max seats" value={ this.state.roomAvailability } className="form-control" onChange={ this.handleRoomAvailabilityChange }/>
                    </label>
                </div>
                <div className="form-group">
                    <label>Conference Detail:</label>
                    <textarea className="form-control" rows="5" id="comment" value={this.state.value} onChange={this.handleContentChange}/>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default CreateConferenceForm;
