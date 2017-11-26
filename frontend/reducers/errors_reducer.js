import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import restaurantErrorsReducer from './restaurant_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  restaurant: restaurantErrorsReducer
});

export default errorsReducer;
