import { combineReducers } from 'redux'
import gamesReducer from './gamesReducer';
import playersReducer from './playersReducer';

const rootReducer = combineReducers({
  game: gamesReducer,
  players: playersReducer
})

export default rootReducer
