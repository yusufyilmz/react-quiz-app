import { combineReducers } from 'redux'
import QuizReducer from './quizReducer'

const rootReducer = combineReducers({
  quiz: QuizReducer,

})

export default rootReducer
