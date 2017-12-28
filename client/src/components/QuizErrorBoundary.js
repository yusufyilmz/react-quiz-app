import React, { Component } from 'react';
import { QuizErrorItem } from './QuizErrorItem';

class QuizErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <QuizErrorItem
                    error={this.state.error ? this.state.error.toString() : ""}
                    component={this.state.errorInfo.componentStack}
                />
            );
        }

        return this.props.children;
    }
}

export default QuizErrorBoundary;


