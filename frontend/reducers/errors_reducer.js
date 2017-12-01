import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import restaurantErrorsReducer from './restaurant_errors_reducer';
import reservationErrorsReducer from './reservation_errors_reducer';
import favoriteErrorsReducer from './favorite_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  restaurant: restaurantErrorsReducer,
  reservation: reservationErrorsReducer,
  favorites: favoriteErrorsReducer
});

export default errorsReducer;
