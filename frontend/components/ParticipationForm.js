import React from 'react';

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
        this.setState({ participants: [event.target.value] });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onParticipate(this.props.conference._id, this.state);
    }

    render() {
        return (
            <form className="form-inline" style={{ marginTop: 20 }}>
                <label>
                    Name:
                    <input type="text" className="form-control" placeholder="Enter Name"
                           value={ this.state.participants } onChange={ this.handleChange }/>
                </label>
                <button
                    className="btn btn-secondary"
                    style={{ marginLeft: 20 }}
                    disabled={ this.props.seatsLeft === 0 ? 'disabled' : '' }
                    onClick={ this.handleSubmit }>
                    Submit
                </button>
            </form>
        );
    }
}

export default ParticipationForm;
