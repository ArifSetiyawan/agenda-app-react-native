import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import calendarReducer from './calendar';

const reducers = combineReducers({
  form: formReducer,
  calendar: calendarReducer
});

export default reducers;