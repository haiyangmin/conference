import React from 'react';
import Conference from './Conference';
import ConferenceRoom from './ConferenceRoom';
import ParticipationForm from './ParticipationForm';
import UpdateConferenceForm from './UpdateConferenceForm';
import Button from './Button';

const ConferenceItem = ({ conference,
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
        <hr></hr>
    </div>
)};

export default ConferenceItem
