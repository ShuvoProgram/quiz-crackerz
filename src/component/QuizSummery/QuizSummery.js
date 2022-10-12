import React from 'react';

const QuizSummery = ({quiz}) => {
    console.log(quiz)
    return (
        <div className='bg-slate-800 py-5 mx-5 rounded-lg'>
            <div className='text-white text-lg'>
                <h3>Quiz Summary</h3>
                <p>Correct Ans: </p>
                <p>Wrong Ans: </p>
            </div>
        </div>
    );
};

export default QuizSummery;