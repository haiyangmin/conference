import React from 'react';

class UpdateConferenceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.conference.name,
            startTime: props.conference.startTime,
            endTime: props.conference.endTime,
            address: props.conference.address,
            roomName: props.conference.roomName,
            roomAvailability: props.conference.roomAvailability,
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
        this.handleRoomNameChange = this.handleRoomNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
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

    handleRoomAvailabilityChange(event) {
        this.setState({ roomAvailability: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onUpdate(this.props.conference._id, this.state);
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit } className="needs-validation" style={{ marginTop: 20 }}>
                <div className="form-group">
                    <label>
                        Conference Name:
                        <input type="text" value={ this.state.name } name="conference name" className="form-control" onChange={ this.handleNameChange }/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Start time:
                        <input type="datetime-local" name="start time"  className="form-control" value={ this.state.startTime } onChange={ this.handleStartTimeChange }/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        End time:
                        <input type="datetime-local" name="end time" className="form-control"  value={ this.state.endTime } onChange={ this.handleEndTimeChange }/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Room name:
                        <input type="text" name="room name" className="form-control" value={ this.state.roomName } onChange={ this.handleRoomNameChange }/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Address:
                        <input type="text" name="address" className="form-control" value={ this.state.address } onChange={ this.handleAddressChange }/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Max seats:
                        <input type="number" name="max seats" className="form-control" value={ this.state.roomAvailability } onChange={ this.handleRoomAvailabilityChange }/>
                    </label>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default UpdateConferenceForm;
