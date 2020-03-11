import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    updateConferenceAction,
    createConferenceAction,
    deleteConferenceAction,
    openParticipationForm,
    closeParticipationForm,
    openUpdateForm,
    closeUpdateForm,
    openCreateForm,
    closeCreateForm,
    getAllConference,
} from '../actions';
import ConferenceItem from '../components/ConferenceItem';
import ConferencesList from '../components/ConferencesList';
import CreateConferenceForm from '../components/CreateConferenceForm';


class ConferencesContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const hide = {
            display: 'none',
        };

        const show = {
            display: 'block',
        };


        if (this.props.app.fetchingConferences) {
            return <div>Loading, Please wait</div>
        }

        if (this.props.app.creatingConference) {
            return <div>Creating Conference, Please wait</div>
        }

        if (this.props.app.updatingConference) {
            return <div>Updating Conference, Please wait</div>
        }

        if (this.props.app.conferences.length > 0 && !this.props.app.creatingConference && !this.props.app.updatingConference) {
            return (
                <ConferencesList>
                    { this.props.app.conferences.map((conference, index) =>
                        <ConferenceItem
                            key={ index.toString() }
                            conference={ conference }
                            openParticipationForm={ this.props.openParticipationForm }
                            openUpdateForm={ this.props.openUpdateForm }
                            closeParticipationForm={ this.props.closeParticipationForm }
                            closeUpdateForm={ this.props.closeUpdateForm }
                            onParticipate={ this.props.updateConferenceAction }
                            isParticipationFormOpen={ this.props.app.openParticipationForm }
                            isUpdateFormOpen={ this.props.app.openUpdateForm }
                            onCancel={ this.props.deleteConferenceAction }
                            onUpdate={ this.props.updateConferenceAction }/>,
                    ) }
                    <div style={ this.props.app.openCreateForm ? show : hide }>
                        <CreateConferenceForm onCreate={ this.props.createConferenceAction }>
                        </CreateConferenceForm>
                    </div>
                    <div style={ { marginBottom: 20 } }>
                        <button
                            onClick={ this.props.app.openCreateForm ? this.props.closeCreateForm : this.props.openCreateForm }>
                            Create New Conference
                        </button>
                    </div>
                </ConferencesList>
            );
        }
    }
}


export default connect(
    (state) => {
        return {
            app: state.app,
            user: state.user,
        };
    },
    (dispatch) => {
        return {
            updateConferenceAction: (id, conference) => {
                dispatch(updateConferenceAction(id, conference));
            },
            deleteConferenceAction: (conference) => {
                dispatch(deleteConferenceAction(conference));
            },
            createConferenceAction: (conference) => {
                dispatch(createConferenceAction(conference));
            },
            openParticipationForm: () => {
                dispatch(openParticipationForm());
            },
            closeParticipationForm: () => {
                dispatch(closeParticipationForm());
            },
            openUpdateForm: () => {
                dispatch(openUpdateForm());
            },
            closeUpdateForm: () => {
                dispatch(closeUpdateForm());
            },
            openCreateForm: () => {
                dispatch(openCreateForm());
            },
            closeCreateForm: () => {
                dispatch(closeCreateForm());
            },
            getAllConference: () => {
                dispatch(getAllConference());
            },
        };
    },
)(ConferencesContainer);
