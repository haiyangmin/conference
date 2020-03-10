import {
    START_FETCHING_USER,
    FETCHING_USER_SUCCESS,
    FETCHING_USER_FAILURE,
    START_CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    START_FETCHING_CONFERENCES,
    FETCHING_CONFERENCES_SUCCESS,
    FETCHING_CONFERENCES_FAILURE,
    START_CREATE_CONFERENCE,
    CREATE_CONFERENCE_SUCCESS,
    CREATE_CONFERENCE_FAILURE,
    UPDATE_CONFERENCE,
    UPDATE_CONFERENCE_SUCCESS,
    UPDATE_CONFERENCE_FAILURE,
    OPEN_PARTICIPATION_FORM,
    CLOSE_PARTICIPATION_FORM,
    OPEN_UPDATE_FORM,
    CLOSE_UPDATE_FORM,
} from '../constants/ActionTypes';

import {
    fetchUser,
    createUser,
    fetchConferences,
    fetchLatestConference,
    createConference,
    updateConference,
    deleteConference,
} from '../api/api';


export const getUser = () => {
    return (dispatch, getState) => {
        dispatch({ type: START_FETCHING_USER });

        fetchUser().then(
            data => {
                if (!data.data._id) dispatch({ type: FETCHING_USER_FAILURE });
                else dispatch({ type: FETCHING_USER_SUCCESS, payload: data.data });
            },
            error => dispatch({ type: FETCHING_USER_FAILURE })
        );
    };
};

export const createUserAction = (user) => {
    return (dispatch, getState) => {
        dispatch({ type: START_CREATE_USER });

        createUser(user).then(
            data => {
                if (!data.data._id) dispatch({ type: CREATE_USER_FAILURE });
                else dispatch({ type: CREATE_USER_SUCCESS, payload: data.data });
            },
            error => dispatch({ type: CREATE_USER_FAILURE })
        );
    };
};

export const getLatestConference = () => {
    return (dispatch, getState) => {
        dispatch({ type: START_FETCHING_CONFERENCES });

        fetchLatestConference().then(
            data => dispatch({ type: FETCHING_CONFERENCES_SUCCESS, payload: data.data }),
            error => dispatch({ type: FETCHING_CONFERENCES_FAILURE })
        );
    };
};

export const getAllConference = () => {
    return (dispatch, getState) => {
        dispatch({ type: START_FETCHING_CONFERENCES });

        fetchConferences().then(
            data => dispatch({ type: FETCHING_CONFERENCES_SUCCESS, payload: data.data }),
            error => dispatch({ type: FETCHING_CONFERENCES_FAILURE })
        );
    };
};

export const openParticipationForm = () => {
    return {
        type: OPEN_PARTICIPATION_FORM,
        openParticipationForm: true,
    }
};

export const closeParticipationForm = () => {
    return {
        type: CLOSE_PARTICIPATION_FORM,
        openParticipationForm: false,
    }
};

export const openUpdateForm = () => {
    return {
        type: OPEN_UPDATE_FORM,
        openUpdateForm: true,
    }
};

export const closeUpdateForm = () => {
    return {
        type: CLOSE_UPDATE_FORM,
        openUpdateForm: false,
    }
};

export const createConferenceAction = (conference) => {
    return (dispatch, getState) => {
        dispatch({ type: START_CREATE_CONFERENCE });

        createConference(conference).then(
            data => dispatch({ type: CREATE_CONFERENCE_SUCCESS, payload: data.data }),
            error => dispatch({ type: CREATE_CONFERENCE_FAILURE})
        );
    };
};


export const updateConferenceAction = (id,conference) => {
    return (dispatch, getState) => {
        dispatch({ type: UPDATE_CONFERENCE });

        updateConference(id,conference).then(
            data => dispatch({ type: UPDATE_CONFERENCE_SUCCESS, payload: data.data }),
            error => dispatch({ type: UPDATE_CONFERENCE_FAILURE})
        );
    };
};

export const deleteConferenceAction = (name,conference) => {
    return (dispatch, getState) => {
        dispatch({ type: UPDATE_CONFERENCE });

        deleteConference(name,conference).then(
            data => dispatch({ type: UPDATE_CONFERENCE_SUCCESS, payload: data.data }),
            error => dispatch({ type: UPDATE_CONFERENCE_FAILURE})
        );
    };
};

