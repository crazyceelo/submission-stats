// compose all of the apps state
import { combineReducers } from 'redux';
import games from './reducers/games';


export default combineReducers({
  games
})