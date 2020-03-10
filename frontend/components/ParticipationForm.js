import React from 'react'

class ParticipationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            participants: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({participants: [event.target.value]});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onParticipate(this.props.conference._id,this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.participants} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" disabled={this.props.seatsLeft === 0 ? 'disabled' : ''} />
            </form>
        );
    }
}

export default ParticipationForm
