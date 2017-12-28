import express from 'express';
import { getJson } from './utils';
import _ from 'lodash';

var router = express.Router();

router.post('/get', (req, res, next) => {

    try {

        //test error handling throw new Error("kwsdjksd")
        var quiz = getJson('quiz.json');
        const answers = _.map(req.body.answers, (answer) => {
            const item = _.find(quiz, (item) => item.index === answer.index);
            answer.result = item.answerIndex === answer.answerIndex ? "correct" : "not";
            return answer;
        })

        res.send({
            success: true,
            value: answers
        })
    }
    catch (err) {
        res.send({
            success: false,
            message: "An exception occured while getting result",     
            stack: err.message
        })
    }

});

export { router as answerRoute }
