import {combineReducers} from 'redux';
import loading from './loading';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const reducer = combineReducers({
  loading,
  todos,
  visibilityFilter,
});

export default reducer;
