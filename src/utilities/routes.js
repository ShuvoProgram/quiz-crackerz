import { createBrowserRouter } from "react-router-dom";
import Error from "../component/Error/Error";
import Home from "../component/Home/Home";
import { fetchData } from "../Data/Data";
import Root from "../Root/Root";

const route = createBrowserRouter([
    {path: '/',
     element: <Root />,
     errorElement: <Error/>,
     children: [
        {path: '/', element: <Home/>, loader: fetchData}
     ]
    }
])

export default route;