import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import restaurantsReducer from './restaurants_reducer';
import reservationsReducer from './reservations_reducer';
import searchReducer from './search_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  restaurants: restaurantsReducer,
  search: searchReducer

})
