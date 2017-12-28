import React from 'react';

export const QuizStartPage = ({ onClick }) => (
    <div>
        <h1 className='quiz-title'>How well do you know Elder?</h1>
        <div className='quiz-answers'>
            <button
                onClick={onClick}
                className='quiz-button btn'>
                Take the quiz!
              </button>
        </div>
    </div>
);
