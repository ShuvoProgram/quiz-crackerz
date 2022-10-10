import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';

const Home = () => {
    const {data} = useLoaderData();
    // console.log(data)
    return (
        <div>
            <Banner></Banner>
            <div className="course mx-5 mt-6 mb-6 flex-col space-y-8 lg:flex-row lg:space-y-0 flex justify-between ">
                {
                    data.map(course => <Courses course={course} key={course.id}/>)
                }
            </div>
        </div>
    );
};

export default Home;