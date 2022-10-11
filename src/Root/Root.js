import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';

export const CourseContext = createContext([]);
export const cartContext = createContext([]);

const Root = () => {
    const { data } = useLoaderData()
    const [cart, setCart] = useState([])
    return (
        <div>
            <CourseContext.Provider value={data}>
                <cartContext.Provider value={[cart, setCart]}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </cartContext.Provider>
            </CourseContext.Provider>
        </div>
    );
};

export default Root;