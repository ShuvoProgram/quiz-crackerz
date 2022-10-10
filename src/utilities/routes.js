import { createBrowserRouter } from "react-router-dom";
import Error from "../component/Error/Error";
import Root from "../Root/Root";

const route = createBrowserRouter([
    {path: '/',
     element: <Root />,
     errorElement: <Error/>
    }
])

export default route;