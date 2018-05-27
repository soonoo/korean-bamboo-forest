import { combineReducers } from 'redux';
import { initWaitingPetitions } from './actions';

const petitions = (state = 4, action) => {
    switch(action.type) {
        case 'INIT_WAITING_PETITIONS':
            return action.petitions;
        default:
            return state;
    }
};

export default combineReducers({
    petitions,
});
