import {
    GET_QUESTION_SUCCESS,
    GET_ANSWERS_SUCCESS,
    GET_QUESTIONS_ERROR,
    GET_ANSWERS_ERROR,
    GET_NETWORK_ANSWERS_ERROR,
    GET_NETWORK_QUESTIONS_ERROR
} from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {
    questions: [],
    answers: [],
    questionError: null,
    resultError: null,
}

export default function (state = INITIAL_STATE, action) {

    switch (action.type) {
        case GET_QUESTION_SUCCESS:
            return { ...state, questions: _.mapKeys(action.payload, (item) => item.index) }
        case GET_ANSWERS_SUCCESS:
            return { ...state, answers: action.payload }
        case GET_QUESTIONS_ERROR:
        case GET_NETWORK_QUESTIONS_ERROR:
            return { ...state, questionError: action.payload }
        case GET_ANSWERS_ERROR:
        case GET_NETWORK_ANSWERS_ERROR:
            return { ...state, resultError: action.payload }
        default:
            return state
    }


}


