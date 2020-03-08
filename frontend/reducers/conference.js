import {
    START_FETCHING_CONFERENCES,
    FETCHING_CONFERENCES_SUCCESS,
    FETCHING_CONFERENCES_FAILURE,
    START_CREATE_CONFERENCE,
    CREATE_CONFERENCE_SUCCESS,
    CREATE_CONFERENCE_FAILURE,
    UPDATE_CONFERENCE,
    UPDATE_CONFERENCE_SUCCESS,
    UPDATE_CONFERENCE_FAILURE,
} from '../constants/ActionTypes';

const initialState = {
    fetchingConferences: true,
    updatingConference: false,
    creatingConference: false,
    conferences: {},
};

export const conferenceReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_FETCHING_CONFERENCES:
            return {...state,
                fetchingCryptocurrencies: true,
            };

        case FETCHING_CONFERENCES_SUCCESS:
            return {...state,
                cryptocurrencies: action.payload.cryptocurrencies,
                fetchingCryptocurrencies: false,
                error: false,
            };

        case FETCHING_CONFERENCES_FAILURE:
            return {...state,
                fetchingCryptocurrencies: false,
                error: 'Unable to fetch cryptocurrency',
            };

        case START_CREATE_CONFERENCE:
            return {...state,
                creatingConference: true,
            };

        case CREATE_CONFERENCE_SUCCESS:
            return {...state,
                conferences: action.payload.conferences,
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
                conferences: action.payload.conferences,
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


