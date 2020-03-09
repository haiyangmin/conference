import React from 'react'

function ListItem(props) {
    return <li>{props.value}</li>;
}

const Participants = (props) => {
    const participants = props.participants;
    const listItems = participants.map((participant,index) =>
        <ListItem key={index.toString()}
                  value={participant} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
};

export default Participants
