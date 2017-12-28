import express from 'express';
import { getJson } from './utils';
import _ from 'lodash';

var router = express.Router();

router.get('/get', (req, res, next) => {

    try {
        //test error handling throw new Error("kwsdjksd")
        var json = getJson('quiz.json');
        const items = _.map(json, (q) => {
            return {
                question: q.question,
                options: q.options,
                index: q.index
            }
        })

        res.send({
            success: true,
            value: items
        })


    }
    catch (err) {
        res.send({
            success: false,
            message: "An exception occured while getting questions",     
            stack: err.message
        })
    }

});


export { router as questionRoute }
