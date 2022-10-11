import React, { useContext } from 'react';
import { cartContext, CourseContext } from '../../Root/Root';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';

const Home = () => {
    const courses = useContext(CourseContext);
    console.log(courses)
    const [cart, setCart] = useContext(cartContext);
    console.log(cart);
    const handleCourse = (e) => {
        console.log(e)
    }
    return (
        <div>
            <Banner></Banner>
            <div className="course mx-5 mt-6 mb-6 flex-col space-y-8 lg:flex-row lg:space-y-0 flex justify-between ">
                {
                    courses.map(course => <Courses course={course} key={course.id} handleCourse={handleCourse}/>)
                }
            </div>
        </div>
    );
};

export default Home;