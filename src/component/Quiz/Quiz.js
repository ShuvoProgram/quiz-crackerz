import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizItem from '../QuizItem/QuizItem';
import QuizSummery from '../QuizSummery/QuizSummery';
import './Quiz.css';

const Quiz = () => {
    const {data} = useLoaderData();
    const {logo, name, questions} = data;
    const [cart, setCart] = useState([])
    return (
        <div className='mt-5 mb-5'>
            <div>
                <img src={logo} alt={name} className='mx-auto h-20 w-20'/>
                <span className='text-2xl font-semibold'>{name}</span>
            </div>
            <div className='mt-5 quiz'>
                <div className='mx-10'>
                    {
                        questions.map(q => <QuizItem quiz={q} key={q.id}></QuizItem>)
                    }
                </div>
                <div className=''>
                    <QuizSummery quiz={questions}></QuizSummery>
                </div>
            </div>
        </div>
    );
};

export default Quiz;