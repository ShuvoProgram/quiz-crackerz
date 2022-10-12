import { createBrowserRouter } from "react-router-dom";
import About from "../component/About/About";
import Error from "../component/Error/Error";
import Feature from "../component/Feature/Feature";
import Home from "../component/Home/Home";
import Quiz from '../component/Quiz/Quiz';
import QuizPage from "../component/QuizPage/QuizPage";
import Static from "../component/Static/Static";
import { fetchData } from "../Data/Data";
import Root from "../Root/Root";

const route = createBrowserRouter([
    {path: '/',
     element: <Root />,
     errorElement: <Error/>,
    loader: fetchData,
     children: [
        {path: '/', element: <Home/>},
        {path: '/quiz/:quizId', element: <Quiz/>, loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        }},
         { path: '/quiz', element: <QuizPage/>},
         { path: '/static', element: <Static/>},
         { path: '/feature', element: <Feature/>},
         { path: '/about', element: <About/>}
     ]
    }
])

export default route;