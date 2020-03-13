import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import ConferencesContainer from './ConferencesContainer';

import { getAllConference } from '../actions';

class AppContainer extends Component {
    componentDidMount() {
        this.props.getAllConference();
    }

    render() {
        return (
            <div className="container">
                <Helmet><title>Conferences</title></Helmet>
                <div className="jumbotron text-center">
                    <h1>Conferences Management</h1>
                    <p>You can create, update, delete conferences!</p>
                    <a href="/calculator">Click here to check the Calculator</a>
                </div>
                <ConferencesContainer/>
            </div>
        );
    }
}

export default connect(
    (state) => { return {
        app: state.app,
        user: state.user,
    }; },
    (dispatch) => { return {
        getAllConference: () => { dispatch(getAllConference()); },
    };}
)(AppContainer);
