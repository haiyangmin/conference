import React from 'react'

class CreateConferenceForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            startTime: '',
            endTime: '',
            address: '',
            roomName: '',
            roomAvailability: 0
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
        this.setState({name: event.target.value});
    }

    handleStartTimeChange(event) {
        this.setState({startTime: event.target.value});
    }

    handleEndTimeChange(event) {
        this.setState({endTime: event.target.value});
    }

    handleRoomNameChange(event) {
        this.setState({roomName: event.target.value});
    }

    handleAddressChange(event) {
        this.setState({address: event.target.value});
    }

    handleRoomAvailabilityChange(event) {
        this.setState({roomAvailability: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onCreate(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </label>
                <label>
                    Start time:
                    <input type="datetime-local" name="start time" value={this.state.startTime} onChange={this.handleStartTimeChange}/>
                </label>
                <label>
                    End time:
                    <input type="datetime-local" name="end time" value={this.state.endTime} onChange={this.handleEndTimeChange}/>
                </label>
                <label>
                    Room name:
                    <input type="text" name="room name" value={this.state.roomName} onChange={this.handleRoomNameChange}/>
                </label>
                <label>
                    Address:
                    <input type="text" name="address" value={this.state.address} onChange={this.handleAddressChange}/>
                </label>
                <label>
                    Max seats:
                    <input type="number" name="max seats" value={this.state.roomAvailability} onChange={this.handleRoomAvailabilityChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default CreateConferenceForm
