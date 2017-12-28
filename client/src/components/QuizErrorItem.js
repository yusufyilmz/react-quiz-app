import React from 'react';
import { getErrorStyle } from '../utils/index';


export const QuizErrorItem = ({ error, detail, component }) => (
    <div style={getErrorStyle(detail)} className='alert alert-danger'>
        <strong>{error}</strong>
        {detail && <details style={{ whiteSpace: 'pre-wrap' }}>
            {detail}
            <br />
            {component}
        </details>
        }
    </div>
);

