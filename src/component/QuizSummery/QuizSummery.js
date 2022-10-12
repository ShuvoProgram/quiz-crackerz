import React, { useContext } from 'react';
import { correctContext, wrongContext } from '../../Root/Root';

const QuizSummery = () => {
    const [correct] = useContext(correctContext);
    const [wrong] = useContext(wrongContext);

    return (
        
        <div className='bg-slate-800 py-5 mx-5 rounded-lg'>
            <div className='text-white text-lg'>
                <h3>Quiz Summary</h3>
                <p>Correct Ans: {correct}</p>
                <p>Wrong Ans: {wrong}</p>
            </div>
        </div>
    );
};

export default QuizSummery;