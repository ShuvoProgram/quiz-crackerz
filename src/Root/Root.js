import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

export const CourseContext = createContext([]);
export const correctContext = createContext();
export const wrongContext = createContext();
export const cartContext = createContext();

const Root = () => {
  const { data } = useLoaderData();
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <div>
      <CourseContext.Provider value={data}>
        <correctContext.Provider value={[correct, setCorrect]}>
          <wrongContext.Provider value={[wrong, setWrong]}>
            <cartContext.Provider value={[cart, setCart]}>
              <Header></Header>
              <Outlet></Outlet>
              <Footer></Footer>
            </cartContext.Provider>
          </wrongContext.Provider>
        </correctContext.Provider>
      </CourseContext.Provider>
    </div>
  );
};

export default Root;
