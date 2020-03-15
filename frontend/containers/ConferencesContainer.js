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
import ConferenceListItem from '../components/ConferenceListItem';
import ConferencesList from '../components/ConferencesList';
import CreateConferenceForm from '../components/CreateConferenceForm';


class ConferencesContainer extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const hide = {
            display: 'none',
        };

        const show = {
            display: 'block',
        };


        if (this.props.app.fetchingConferences) {
            return <div>Loading, Please wait</div>;
        }

        if (this.props.app.creatingConference) {
            return <div>Creating Conference, Please wait</div>;
        }

        if (this.props.app.conferences.length === 0) {
            return (
                <div>
                    <div style={ this.props.app.openCreateForm ? show : hide }>
                        <CreateConferenceForm onCreate={ this.props.createConferenceAction }>
                        </CreateConferenceForm>
                    </div>
                    <div style={ { marginBottom: 20 } }>
                        <button
                            className="btn btn-secondary"
                            onClick={ this.props.app.openCreateForm ? this.props.closeCreateForm : this.props.openCreateForm }>
                            { this.props.app.openCreateForm ? 'Close Form' : 'Create New Conference' }
                        </button>
                    </div>
                </div>
            );
        }


        if (this.props.app.conferences.length > 0 && !this.props.app.creatingConference && !this.props.app.updatingConference) {
            return (
                <div>
                    <ConferencesList>
                        { this.props.app.conferences.map((conference, index) =>
                            <ConferenceListItem
                                key={ index.toString() }
                                conference={ conference }/>,
                        ) }
                        <div style={ this.props.app.openCreateForm ? show : hide }>
                            <CreateConferenceForm onCreate={ this.props.createConferenceAction }>
                            </CreateConferenceForm>
                        </div>
                        <div style={ { marginBottom: 20 } }>
                            <button
                                className="btn btn-secondary"
                                onClick={ this.props.app.openCreateForm ? this.props.closeCreateForm : this.props.openCreateForm }>
                                { this.props.app.openCreateForm ? 'Close Form' : 'Create New Conference' }
                            </button>
                        </div>
                    </ConferencesList>
                </div>
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
