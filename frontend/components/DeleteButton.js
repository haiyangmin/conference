import React from 'react'

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.onCancel(this.props.conference._id)
    }

    render() {
        return (
            <button
                className="btn btn-secondary"
                style={{ marginRight: 20 }}
                onClick={this.handleClick}>
                Delete Conference
            </button>
        );
    }
}

export default DeleteButton
