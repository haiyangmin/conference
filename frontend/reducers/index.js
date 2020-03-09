import { combineReducers } from 'redux'
import { conferenceReducer }from './conference'
import { userReducer } from './user'

export default combineReducers({
    app: conferenceReducer,
    user: userReducer
})

