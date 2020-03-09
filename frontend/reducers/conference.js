import {
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
    START_FETCHING_CONFERENCES,
    FETCHING_CONFERENCES_SUCCESS,
    FETCHING_CONFERENCES_FAILURE,
} from '../constants/ActionTypes';

const initialState = {
    openParticipationForm: false,
    openUpdateForm: false,
    fetchingConferences: true,
    creatingConference: false,
    updatingConference: false,
    conferences: [],
};

export const conferenceReducer = (state = initialState, action) => {
    switch (action.type) {

        case OPEN_PARTICIPATION_FORM:
            return {...state,
                openParticipationForm: action.openParticipationForm,
            };

        case CLOSE_PARTICIPATION_FORM:
            return {...state,
                openParticipationForm: action.openParticipationForm,
            };

        case OPEN_UPDATE_FORM:
            return {...state,
                openParticipationForm: action.openUpdateForm,
            };

        case CLOSE_UPDATE_FORM:
            return {...state,
                openParticipationForm: action.openUpdateForm,
            };

        case START_FETCHING_CONFERENCES:
            return {...state,
                fetchingConferences: true,
            };

        case FETCHING_CONFERENCES_SUCCESS:
            return {...state,fetchingConferences: false,
                conferences: action.payload,
            };

        case FETCHING_CONFERENCES_FAILURE:
            return {...state,
                fetchingConferences: false,
                error: 'Unable to fetch user!',
            };

        case START_CREATE_CONFERENCE:
            return {...state,
                creatingConference: true,
            };

        case CREATE_CONFERENCE_SUCCESS:
            return {...state,
                conferences: action.payload,
                creatingConference: false,
                error: false,
            };

        case CREATE_CONFERENCE_FAILURE:
            return {...state,
                creatingConference: false,
                error: 'Unable to create conference',
            };

        case UPDATE_CONFERENCE:
            return {...state,
                updatingConference: true,
            };

        case UPDATE_CONFERENCE_SUCCESS:
            return {...state,
                conferences: action.payload,
                updatingConference: false,
                error: false,
            };

        case UPDATE_CONFERENCE_FAILURE:
            return {...state,
                updatingConference: false,
                error: 'Unable to update conference',
            };

        default:
            return state;
    }
};


