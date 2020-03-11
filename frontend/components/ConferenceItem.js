import React from 'react';
import Conference from './Conference';
import ConferenceRoom from './ConferenceRoom';
import ParticipationForm from './ParticipationForm';
import UpdateConferenceForm from './UpdateConferenceForm';
import DeleteButton from './DeleteButton';

const ConferenceItem = ({ conference,
                            onParticipate,
                            onCancel,
                            onUpdate,
                            openParticipationForm,
                            openUpdateForm,
                            closeParticipationForm,
                            closeUpdateForm,
                            isParticipationFormOpen,
                            isUpdateFormOpen }) => {

    const hide = {
        display: 'none',
    };

    const show = {
        display: 'block',
    };

    return (
    <div style={{ marginBottom: 40 }} className="container jumbotron">
        <Conference
            name={conference.name}
            startTime={conference.startTime}
            endTime={conference.endTime}
            participants={conference.participants}/>
        <ConferenceRoom
            name={conference.roomName}
            address={conference.address}
            seatsLeft={conference.roomAvailability - conference.participants.length}
            maxSeats={conference.roomAvailability} />
        <div style={isParticipationFormOpen ? show : hide}>
             <ParticipationForm
                 seatsLeft={conference.roomAvailability - conference.participants.length}
                 onParticipate={onParticipate}
                 conference={conference}>
            </ParticipationForm>
        </div>
        <div style={isUpdateFormOpen ? show : hide}>
            <UpdateConferenceForm
                onUpdate={onUpdate}
                conference={conference}>
            </UpdateConferenceForm>
        </div>
        <div className="container" style={{ marginTop: 30 }}>
            <button
                className="btn btn-secondary"
                style={{ marginRight: 20 }}
                onClick={isParticipationFormOpen ? closeParticipationForm : openParticipationForm}>
                {isParticipationFormOpen ? 'Close Form' : 'Participate'}
            </button>
            <button
                className="btn btn-secondary"
                style={{ marginRight: 20 }}
                onClick={isUpdateFormOpen ? closeUpdateForm : openUpdateForm}>
                {isUpdateFormOpen ? 'Close Form' : 'Update Conference'}
            </button>
            <DeleteButton
                onCancel={onCancel}
                conference={conference}>
            </DeleteButton>
        </div>
        <hr></hr>
    </div>
)};

export default ConferenceItem
