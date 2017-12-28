import React, { Component } from 'react';
import { QuizResultItem } from './QuizResultItem';
import { QuizScore } from './QuizScore';
import _ from 'lodash';
import PropTypes from 'prop-types';

class QuizResultPage extends Component {

    static propTypes = {
        answers: PropTypes.array.isRequired,
        onClick: PropTypes.func.isRequired,
        
    }

    renderAnswers() {
        return _.map(this.props.answers, (answer) => {
            return <QuizResultItem
                key={answer.index}
                answer={answer}
                userAnswer={_.find(answer.options, (option) => option.index ===
                    answer.answerIndex)}
            />
        })
    }

    renderTotalScore() {

        return <QuizScore
            correctAnswers={_.filter(this.props.answers, (answer) =>
                answer.result === "correct")}
            answers={this.props.answers}
        />

    }

    render() {
        return (
            <div>
                <div className='quiz-result'>
                    {this.renderAnswers()}
                    {this.renderTotalScore()}
                    <button
                        onClick={this.props.onClick}
                        className='quiz-button btn'>
                        Take the quiz again!
                     </button>
                </div>
            </div>
        )
    }


}

export default QuizResultPage;





