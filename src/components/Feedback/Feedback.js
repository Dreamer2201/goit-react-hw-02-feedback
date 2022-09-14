import React from 'react';
import { BtnsFeedbackList, Btnfeedback } from './Feedback.styled';

export  default  function Feedback() {
    return (
        <div>
            <h2>Leave feedback please</h2>
            <BtnsFeedbackList>
                <Btnfeedback><button>Good</button></Btnfeedback>
                <Btnfeedback><button>Neutral</button></Btnfeedback>
                <Btnfeedback><button>Bad</button></Btnfeedback>
            </BtnsFeedbackList>
            <h2>Statistics</h2>
            <ul>
                <li><p>Good: 0</p></li>
                <li><p>Neutral: 0</p></li>
                <li><p>Bad: 0</p></li>
            </ul>
        </div>)
};
