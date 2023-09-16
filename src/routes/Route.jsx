import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayouts from "../layouts/NewsLayouts";
import News from "../pages/News/News/News";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<Category></Category>
            },
           
        ]
    },
    {
        path: 'news',
        element:<NewsLayouts></NewsLayouts>,
        children:[
            {
                path:'id',
                element:<News></News>
            }

        ]
    }
])
export default route;