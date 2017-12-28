import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import QuestionPage from './QuestionPage';
import { QuizStartPage } from './QuizStartPage';
import QuizResultPage from './QuizResultPage';
import QuizErrorBoundary from './QuizErrorBoundary';
import { QuizErrorItem } from './QuizErrorItem';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { page: "start", error: {} }
    }

    static propTypes = {
        answers: PropTypes.array.isRequired,
        error: PropTypes.object.isRequired,
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.answers) {
            this.setState({ page: "result" })
        }
        if(nextProps.questionerror) {
            this.setState({ page: "error", error: nextProps.questionerror })
        }

         if(nextProps.resulterror) {
            this.setState({ page: "error", error: nextProps.resulterror })
        }
    }

    renderPage() {

        switch (this.state.page) {
            case "start":
                return (<QuizStartPage
                    onClick={() => this.setState({ page: "question" })}
                />);
            case "question":
                return <QuestionPage />
            case "result":
                return (<QuizResultPage
                    onClick={() => this.setState({ page: "question" })}
                    answers={this.props.answers}
                />);

            case "error":
                return (<QuizErrorItem
                    error={this.state.error.message}
                    detail={this.state.error.stack}
                    component=''
                />
                );
            default:
                throw new Error('No default page');

        }

    }

    render() {
        return (
            <div>
                <QuizErrorBoundary>
                    <div className='container-fluid'>
                        <div
                            id='quiz'
                            className='carousel slide'
                            data-ride='carousel'>
                            {this.renderPage()}
                        </div>
                    </div>
                </QuizErrorBoundary>
            </div>

        )
    }
}



const mapStateToProps = (state) => {

    console.log(state)
    return {
        answers: state.quiz.answers,
        resulterror: state.quiz.resultError,
        questionerror: state.quiz.questionError

    }
}


export default connect(mapStateToProps, null)(Quiz)



