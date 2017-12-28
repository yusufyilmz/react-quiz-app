import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import QuestionOrder from './QuestionOrder';
import { getQuestions, submitAnswers } from '../actions/index';
import _ from 'lodash';
import { QuizErrorItem } from './QuizErrorItem';
import PropTypes from 'prop-types';

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      questions: [],
      quizSubmitted: false,
      completed: false
    }
  }

  static propTypes = {
    questions: PropTypes.any.isRequired,
  }

  componentWillMount() {
    this.props.getQuestions();
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.questions) {
      const questions = _.map(nextProps.questions, (question) => {
        question.answerIndex = -1;
        return question
      })

      this.setState({ questions: questions, notcompleted: false })
    }
  }

  nextQuestion() {

    if (this.state.questionIndex < this.state.questions.length - 1) {
      this.setState({
        questionIndex: this.state.questionIndex + 1,
        quizSubmitted: false
      })
    }
  }

  previousQuestion() {

    if (this.state.questionIndex > 0) {
      this.setState({
        questionIndex: this.state.questionIndex - 1,
        quizSubmitted: false
      })
    }

  }

  submitAnswers() {

    const notAnsweredQuestions = _.filter(this.state.questions, (question) => question.answerIndex === -1)

    if (notAnsweredQuestions.length > 0) {
      this.setState({ quizSubmitted: true, completed: false })
    }
    else {
      this.setState({ quizSubmitted: true, completed: true }, () => {
        this.props.submitAnswers(this.state.questions);
      })
    }
  }

  answerQuestion(questionIndex, answerIndex) {

    const questions = _.map(this.state.questions, (question) => {
      if (question.index === questionIndex) {
        question.answerIndex = answerIndex;
      }
      return question
    })


    const notAnsweredQuestions = _.filter(questions, (question) => question.answerIndex === -1)

    if (notAnsweredQuestions.length === 0) {
      this.setState({ questions, completed: true });
    }
    else {
      this.setState({ questions });
    }
  }


  renderButtons() {


    return (
      <div className='quiz-answers'>
        {this.state.questionIndex !== 0 &&
          <button
            onClick={this.previousQuestion.bind(this)}
            className='quiz-button btn'>
            Previous question
            </button>
        }

        {this.state.questions.length - 1 !== this.state.questionIndex &&
          <button
            onClick={this.nextQuestion.bind(this)}
            className='quiz-button btn'>
            Next question
          </button>
        }

        {(this.state.questions.length - 1 === this.state.questionIndex || this.state.completed) &&
          < button
            onClick={this.submitAnswers.bind(this)}
            className='quiz-button btn'>
            Submit Answers
            </button>

        }

      </div>
    )
  }

  renderQuestions() {
    let index = -1;
    return _.map(this.state.questions, (question) => {
      index++;
      if (index === this.state.questionIndex) {
        return <Question
          key={question.index}
          answerQuestion={this.answerQuestion.bind(this)}
          item={question}
          index={index}
        />
      }
    })
  }

  render() {
    return (
      <div>
        {
          this.state.quizSubmitted && !this.state.completed &&
          <QuizErrorItem
            error='Answer all questions to complete the test'
          />
        }
        <QuestionOrder
          count={this.state.questions.length}
          order={this.state.questionIndex} />

        {this.state.questions.length > 0 &&
          <div className='carousel-inner' role='listbox'>
            {this.renderQuestions()}
            {this.renderButtons()}
          </div>
        }
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    questions: state.quiz.questions,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestions: () => dispatch(getQuestions()),
    submitAnswers: (answers) => dispatch(submitAnswers(answers)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage)
