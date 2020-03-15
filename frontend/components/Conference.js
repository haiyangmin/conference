import React from 'react';
import { useParams } from "react-router-dom";
import Participants from './Participants';
import moment from 'moment';
import ParticipationForm from './ParticipationForm';
import UpdateConferenceForm from './UpdateConferenceForm';
import Button from './Button';

const Conference = ({ conferences,
                        onParticipate,
                        onCancel,
                        onUpdate,
                        openParticipationForm,
                        openUpdateForm,
                        closeParticipationForm,
                        closeUpdateForm,
                        participationFormId,
                        updateFormId,
                        isParticipationFormOpen,
                        isUpdateFormOpen }) => {

    const hide = {
        display: 'none',
    };

    const show = {
        display: 'block',
    };

    let { id } = useParams();

    const conference = conferences.filter((conference) => conference._id === id)[0];

    if (conference === undefined) {
        return <div style={{ marginTop: 100,textAlign: 'center' }} className="container">The Conference does not exist</div>;
    }

    let dateDisplay = moment(conference.date).format("MMM Do YYYY");

    return (<div style={{ marginBottom: 40 }} className="container jumbotron">
        <div>
            <h2>{ conference.name }</h2>
        </div>
        <p style={ { marginBottom: 20 } }>{ dateDisplay }</p>
        <p style={ { marginBottom: 20 } }>{ conference.address },{ conference.city }</p>
        <div>
            <p style={ { marginBottom: 20 } }>{ conference.content }.</p>
        </div>
        <div className="card-columns">
            <div className="card bg-light">
                <div className="card-body text-center">
                    <h3 className="card-text">Timings</h3>
                    <p className="card-text">{ conference.startTime } - { conference.endTime }</p>
                </div>
            </div>
            <div className="card bg-light">
                <div className="card-body text-center">
                    <h3 className="card-text">Conference Room</h3>
                    <p className="card-text">{ conference.roomName }</p>
                </div>
            </div>
            <div className="card bg-light">
                <div className="card-body text-center">
                    <h3 className="card-text">Max Seats</h3>
                    <p className="card-text">{ conference.roomAvailability }</p>
                </div>
            </div>
            <div className="card bg-light">
                <div className="card-body text-center">
                    <h3 className="card-text">Seat Left</h3>
                    <p className="card-text">{conference.roomAvailability - conference.participants.length}</p>
                </div>
            </div>
            <div className="card bg-light">
                <div className="card-body text-center">
                    <h3 className="card-text">Participants</h3>
                    <Participants participants={ conference.participants }/>
                </div>
            </div>
        </div>
        <hr></hr>
        <div style={(participationFormId === conference._id) ? show : hide}>
            <ParticipationForm
                seatsLeft={conference.roomAvailability - conference.participants.length}
                onParticipate={onParticipate}
                conference={conference}>
            </ParticipationForm>
        </div>
        <div style={(updateFormId === conference._id) ? show : hide}>
            <UpdateConferenceForm
                onUpdate={onUpdate}
                conference={conference}>
            </UpdateConferenceForm>
        </div>
        <div className="container" style={{ marginTop: 30 }}>
            <Button
                conferenceId={conference._id}
                buttonName={ (isParticipationFormOpen && (participationFormId === conference._id))  ? 'Close Form' : 'Participate'}
                onClick={isParticipationFormOpen ? closeParticipationForm : openParticipationForm}>
            </Button>
            <Button
                conferenceId={conference._id}
                buttonName={(isUpdateFormOpen && (updateFormId === conference._id)) ? 'Close Form' : 'Update Conference'}
                onClick={isUpdateFormOpen ? closeUpdateForm : openUpdateForm}>
            </Button>
            <Button
                onClick={onCancel}
                buttonName={'Delete Conference'}
                conferenceId={conference._id}>
            </Button>
        </div>
    </div>);
};

export default Conference;
