import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayouts from "../layouts/NewsLayouts";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";

const route = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    },
    {
        path:'category',
        element:<Main></Main>,
        children: [
           
            {
                path:':id',
                element:<Category></Category>,
                loader:({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
           
        ]
    },
    {
        path: 'news',
        element:<NewsLayouts></NewsLayouts>,
        children:[
            {
                path:':id',
                element:<News></News>,
                loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }

        ]
    }
])
export default route;