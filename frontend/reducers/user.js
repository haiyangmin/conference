import {
    START_FETCHING_USER,
    FETCHING_USER_SUCCESS,
    FETCHING_USER_FAILURE,
    START_CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
} from '../constants/ActionTypes';

const initialUserState = {
    fetchingUser: true,
    creatingUser: false,
    email: null,
    username: null,
    role: null,
};

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case START_FETCHING_USER:
            return {...state,
                fetchingUser: true,
            };

        case FETCHING_USER_SUCCESS:
            return {...state,fetchingUser: false,
                username: action.payload.username,
                email: action.payload.email,
                role: action.payload.role,
            };

        case FETCHING_USER_FAILURE:
            return {...state,
                fetchingUser: false,
                error: 'Unable to fetch user!',
            };

        case START_CREATE_USER:
            return {...state,
                creatingUser: true,
            };

        case CREATE_USER_SUCCESS:
            return {...state,
                username: action.payload.username,
                email: action.payload.email,
                role: action.payload.role,
                creatingUser: false,
            };

        case CREATE_USER_FAILURE:
            return {...state,
                creatingUser: false,
                error: 'Unable to update user cryptocurrency!',
            };

        default:
            return state;
    }
};
