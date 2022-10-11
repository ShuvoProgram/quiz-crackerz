import React, { useContext } from 'react';
import { CourseContext } from '../../Root/Root';
import Courses from '../Courses/Courses';

const QuizPage = () => {
    const course = useContext(CourseContext);
    return (
        <div>
            <div className="course mx-5 mt-6 mb-6 flex-col space-y-8 lg:flex-row lg:space-y-0 flex justify-between ">
                {
                    course.map(course => <Courses course={course} key={course.id} />)
                }
            </div>
        </div>
    );
};

export default QuizPage;