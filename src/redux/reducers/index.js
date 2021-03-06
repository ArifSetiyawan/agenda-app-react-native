import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import homeReducer from './home';

const reducers = combineReducers({
  form: formReducer,
  home: homeReducer
});

export default reducers;