import React from 'react';

export const QuizScore = ({ correctAnswers, answers }) => (
    <div className='element-center'>
        <h2>Your score : {correctAnswers.length}/{answers.length} </h2>
    </div>
);

