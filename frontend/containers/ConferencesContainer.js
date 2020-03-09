import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateConferenceAction, createConferenceAction, deleteConferenceAction, getAllConference } from '../actions';
import ConferenceItem from '../components/ConferenceItem';
import ConferencesList from '../components/ConferencesList';


class ConferencesContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);

        const {
            creatingConference,
            updatingConference,
            fetchingConferences,
        } = this.props.app;

        if (fetchingConferences) {
            return (
                <div>
                    Loading, Please wait
                </div>
            );
        }

        if (creatingConference) {
            return (
                <div>
                    Creating Conference, Please wait
                </div>
            );
        }

        if (updatingConference) {
            return (
                <div>
                    Updating Conference, Please wait
                </div>
            );
        }

        if (this.props.app.conferences.length > 0) {
            console.log(this.props.app.conferences);
            return (
                <ConferencesList >
                    {this.props.app.conferences.map(conference =>
                        <ConferenceItem
                            conference={conference}
                            openParticipationForm={this.props.openParticipationForm}
                            openUpdateForm={this.props.openUpdateForm}
                            onParticipate={this.props.updateConferenceAction}
                            onCancel={this.props.deleteConferenceAction}
                            onUpdate={this.props.updateConferenceAction} />
                    )}
                    <div style={{ marginBottom: 20 }}>
                        <button
                            onClick={this.props.createConferenceAction}>
                            Create New  Conference
                        </button>
                    </div>
                </ConferencesList>
            );
        }
    }
}


export default connect(
    (state) => { return {
        app: state.app,
        user: state.user,
    }; },
    (dispatch) => { return {
        updateConferenceAction: (name,conference) => { dispatch(updateConferenceAction(name,conference)); },
        deleteConferenceAction: (name,conference) => { dispatch(deleteConferenceAction(conference)); },
        createConferenceAction: (name,conference) => { dispatch(createConferenceAction(conference)); },
        getAllConference: () => { dispatch(getAllConference()); },
    }; }
)(ConferencesContainer);
