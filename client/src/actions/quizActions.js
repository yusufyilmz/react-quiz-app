import {
    GET_QUESTION_SUCCESS,
    GET_ANSWERS_SUCCESS,
    GET_ANSWERS_ERROR,
    GET_QUESTIONS_ERROR,
    GET_NETWORK_ANSWERS_ERROR,
    GET_NETWORK_QUESTIONS_ERROR,

} from './types';
import _ from 'lodash';


function getQuestionsResult(item) {
    if (item.success) {
        return {
            type: GET_QUESTION_SUCCESS,
            payload: item.value
        }
    }
    else {
        return {
            type: GET_QUESTIONS_ERROR,
            payload: {
                message: item.message,
                stack: item.stack
            }
        }

    }

}

function getAnswersResult(item) {
    if (item.success) {
        return {
            type: GET_ANSWERS_SUCCESS,
            payload: item.value
        }
    }
    else {
        return {
            type: GET_ANSWERS_ERROR,
            payload: {
                message: item.message,
                stack: item.stack
            }
        }

    }
}

function getNetworkQuestionsError(error) {
    return {
        type: GET_NETWORK_QUESTIONS_ERROR,
        payload: error
    }
}

function getNetworkAnswersError(error) {
    return {
        type: GET_NETWORK_ANSWERS_ERROR,
        payload: error
    }
}


export function getQuestions() {

    return (dispatch) => {
        fetch('/questions/get')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                else {
                    return response
                }
            })
            .then((response) => response.json())
            .then((items) => dispatch(getQuestionsResult(items)))
            .catch(error => {
                dispatch(getNetworkQuestionsError(error))
            });

    }
}


export function submitAnswers(answers) {

    return (dispatch) => {

        fetch(`/answers/get`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                answers: answers,
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                else {
                    return response
                }
            })
            .then((response) => response.json())
            .then((items) => dispatch(getAnswersResult(items)))
            .catch(error => {
                dispatch(getNetworkAnswersError(error))
            });
    }
}