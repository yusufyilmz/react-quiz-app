import React from 'react';

export const QuizResultItem = ({ answer, userAnswer }) => (
    <div
        style={{ margin: '0 auto', display: 'block' }}
        className='element-center'>
        <p >{answer.index}. {answer.question} </p>
        <p >Your Answer: {userAnswer.value} </p>

        {answer.result === 'correct' ?
            <p className='bg-success'>  Correct </p> :
            <p className='bg-danger'> Not Correct </p>
        }

    </div>
);

