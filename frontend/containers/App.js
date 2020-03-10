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
            <div>
                <Helmet><title>Conferences</title></Helmet>
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
