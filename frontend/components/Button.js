import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.conferenceId
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.onClick(this.state.id)
    }

    render() {
        return (
            <button
                className="btn btn-secondary"
                style={{ marginRight: 20 }}
                onClick={this.handleClick}>
                {this.props.buttonName}
            </button>
        );
    }
}

export default Button
