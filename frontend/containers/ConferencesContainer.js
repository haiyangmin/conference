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
                            participationFormId={ this.props.app.participationFormId }
                            updateFormId={ this.props.app.updateFormId }
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
                            className="btn btn-secondary"
                            onClick={ this.props.app.openCreateForm ? this.props.closeCreateForm : this.props.openCreateForm }>
                            {this.props.app.openCreateForm ? 'Close Form' : 'Create New Conference'}
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
            deleteConferenceAction: (id) => {
                dispatch(deleteConferenceAction(id));
            },
            createConferenceAction: (conference) => {
                dispatch(createConferenceAction(conference));
            },
            openParticipationForm: (id) => {
                dispatch(openParticipationForm(id));
            },
            closeParticipationForm: () => {
                dispatch(closeParticipationForm());
            },
            openUpdateForm: (id) => {
                dispatch(openUpdateForm(id));
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
