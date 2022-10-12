import React, { useContext } from 'react';
import { cartContext } from '../../Root/Root';

const QuizSummery = () => {
    const [ans] = useContext(cartContext)
    console.log(ans)
    return (
        <div className='bg-slate-800 py-5 mx-5 rounded-lg'>
            <div className='text-white text-lg'>
                <h3>Quiz Summary</h3>
                <p>Correct Ans: {ans.correct.length}</p>
                <p>Wrong Ans: {ans.wrong.length}</p>
            </div>
        </div>
    );
};

export default QuizSummery;