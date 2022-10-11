import React from 'react';
import QuizOption from '../QuizOption/QuizOption';

const QuizItem = ({quiz}) => {
    // console.log(quiz);
    const { question, options, correctAnswer } = quiz;
    
    return (
        <div>
           <div className='grid'>
            <div>
                <p>{question}</p>
                <div>
                    {options.map(e => <QuizOption options={e}></QuizOption>)}
                </div>
            </div>
           </div>
        </div>
    );
};

export default QuizItem;