import React from 'react'

function ListItem(props) {
    return <li className="list-group-item">{props.value}</li>;
}

const Participants = (props) => {
    const participants = props.participants;
    const listItems = participants.map((participant,index) =>
        <ListItem key={index.toString()}
                  value={participant} />
    );
    return (
        <div>
            <h3>Participant List</h3>
            <ul className="list-group">
                {listItems}
            </ul>
        </div>
    );
};

export default Participants
