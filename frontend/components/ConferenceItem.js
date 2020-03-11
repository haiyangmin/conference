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

    console.log(conference);

    const hide = {
        display: 'none',
    };

    const show = {
        display: 'block',
    };

    return (
    <div style={{ marginBottom: 20 }}>
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
        <div>
            <button
                onClick={isParticipationFormOpen ? closeParticipationForm : openParticipationForm}>
                Participate
            </button>
        </div>
        <div>
            <button
                onClick={isUpdateFormOpen ? closeUpdateForm : openUpdateForm}>
                Update conference
            </button>
        </div>
        <div>
            <DeleteButton
                onCancel={onCancel}
                conference={conference}>
                Cancel conference
            </DeleteButton>
        </div>
    </div>
)};

export default ConferenceItem
