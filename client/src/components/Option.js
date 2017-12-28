import React from 'react';
import { getClassName, getOptionName, getOptionStyle } from '../utils/index';

export const Option = ({ item, answerIndex, answerQuestion }) => (
    <label
        style={getOptionStyle(item.index, answerIndex)}
        className={getClassName(item.index)}>
        <span className='btn-label'>
            <i className='glyphicon glyphicon-chevron-right'>
                {getOptionName(item.index)}
            </i>
        </span>
        <input type='radio'
            onClick={() => answerQuestion(item.index)}
            name='q_answer'
            value='1' />
        {item.value}
    </label>
);

