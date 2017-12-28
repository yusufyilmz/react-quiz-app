import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

class QuestionOrder extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
    }

    renderQuestionOrders() {

        const array = [];

        for (let item = 0; item < this.props.count; item++) {
            array.push(item)
        }

        return _.map(array, (index) => {
            if (index === this.props.order) {
                return <li key={index} className='dark'></li>
            }
            else {
                return <li key={index} className=''></li>
            }
        })
    }
    render() {
        return (
            <div>
                <ol className='progress-circles show'>
                    {this.renderQuestionOrders()}
                </ol>
            </div>
        )
    }
}

export default QuestionOrder;




