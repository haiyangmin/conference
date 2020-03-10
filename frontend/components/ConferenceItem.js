import React from 'react';
import Conference from './Conference';
import ConferenceRoom from './ConferenceRoom';
import ParticipationForm from './ParticipationForm';
import UpdateConferenceForm from './UpdateConferenceForm';

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
        <div>
            { isParticipationFormOpen ?  <ParticipationForm>
                seatsTaken={conference.roomAvailability - conference.participants.length}
                maxSeats={conference.roomAvailability}
                onParticipate={onParticipate}
            </ParticipationForm> : null }
        </div>
        <div>
            { isUpdateFormOpen ?  <UpdateConferenceForm>
                onUpdate={onUpdate}
            </UpdateConferenceForm> : null }
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
            <button
                onClick={onCancel}>
                Cancel conference
            </button>
        </div>
    </div>
)};

export default ConferenceItem
