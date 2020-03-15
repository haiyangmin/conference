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
import Conference from '../components/Conference';
import { Helmet } from 'react-helmet';
import ConferencesContainer from './ConferencesContainer';


class ConferenceContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getAllConference();
    }

    render() {

        console.log(this.props.app);

        if (this.props.app.fetchingConferences) {
            return <div style={{ marginTop: 80,textAlign: 'center' }} className="container">Loading, Please wait</div>;
        }

        if (this.props.app.updatingConference) {
            return <div style={{ marginTop: 80,textAlign: 'center' }} className="container">Updating Conference, Please wait</div>;
        }

        if (this.props.app.deletingConference === 'deleteStart') {
            return <div style={{ marginTop: 80,textAlign: 'center' }} className="container">Deleting Conference, Please wait</div>;
        }

        if (this.props.app.deletingConference === 'deleteSuccess') {
            return <div style={{ marginTop: 80,textAlign: 'center' }} className="container">The Conference is deleted</div>;
        }

        if (this.props.app.deletingConference === 'deleteFailed') {
            return <div style={{ marginTop: 80,textAlign: 'center' }} className="container">The delete is failed</div>;
        }

        else {
            return (
                <div className="container">
                    <Helmet><title>Conferences</title></Helmet>
                    <div className="jumbotron text-center">
                        <h1>Conferences Management</h1>
                        <p>You can create, update, delete conferences!</p>
                        <a href="/calculator">Click here to check the Calculator</a>
                    </div>
                    <Conference
                        conferences={ this.props.app.conferences }
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
                        onUpdate={ this.props.updateConferenceAction }/>
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
)(ConferenceContainer);
