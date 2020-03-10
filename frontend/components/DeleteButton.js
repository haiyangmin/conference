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
                onClick={this.handleClick}>
                Cancel conference
            </button>
        );
    }
}

export default DeleteButton
