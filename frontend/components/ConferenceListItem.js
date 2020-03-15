import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import ConferenceTag from './ConferenceTags';

const ConferenceListItem = ({ conference }) => {


    let dateDisplay = moment(conference.date).format("MMM Do YYYY");

    return (<div style={{ marginBottom: 20 }} className="container jumbotron">
        <p style={ { marginBottom: 20 } }>{ dateDisplay }</p>
        <div>
            <Link to={`conference/` + conference._id}>{ conference.name }</Link>
        </div>
        <p style={ { marginBottom: 20 } }>{ conference.city }</p>
        <div>
            <p style={ { marginBottom: 20 } }>{ conference.content }.</p>
        </div>
        <div style={ { marginBottom: 20 } }>
            <ConferenceTag keywords={ conference.keywords }/>
        </div>
        <div>
            <p style={ { marginBottom: 20 } }>{ conference.participants.length } Attend</p>
        </div>
    </div>);
};

export default ConferenceListItem;
