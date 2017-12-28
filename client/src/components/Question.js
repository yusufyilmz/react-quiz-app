import React, { Component } from 'react';
import { Option } from './Option';
import _ from 'lodash';
import PropTypes from 'prop-types';

class Question extends Component {

    constructor(props) {
        super(props);
    }
    static propTypes = {
        index: PropTypes.number.isRequired,
        item: PropTypes.object.isRequired,
        
    }
    renderOptions() {
        let index = 0;
        return _.map(this.props.item.options, (option) => {
            index++;
            return <Option key={option.index}
                answerQuestion={this.answerQuestion.bind(this)}
                item={option}
                answerIndex={this.props.item.answerIndex} />
        })
    }

    answerQuestion(answerIndex) {
        this.props.answerQuestion(this.props.item.index, answerIndex);
    }

    render() {
        return (
            <div className='element-center'>
                <div style={{ marginTop: 50 }} className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h3>
                                <span className='label label-warning'
                                    id='qid'>{this.props.index + 1}
                                </span>
                                {this.props.item.question}
                            </h3>
                        </div>
                        <div className='modal-body'>
                            <div className='quiz'
                                id='quiz'
                                data-toggle='buttons'>
                                {this.renderOptions()}
                            </div>
                        </div>
                    </div>

                    <div className='modal-footer text-muted'>
                        <span id='answer'></span>
                    </div>
                </div>

            </div>
        )
    }


}

export default Question;




