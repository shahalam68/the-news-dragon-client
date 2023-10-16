import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayouts from "../layouts/NewsLayouts";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Terms/Terms";

const route = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to= '/category'></Navigate>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'terms',
                element:<Terms></Terms>
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
                loader:({params}) => fetch(`https://the-news-dragon-server-rosy-sigma.vercel.app/categories/${params.id}`)
            },
           
        ]
    },
    {
        path: 'news',
        element:<NewsLayouts></NewsLayouts>,
        children:[
            {
                path:':id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params}) => fetch(`https://the-news-dragon-server-rosy-sigma.vercel.app/news/${params.id}`)
            }

        ]
    }
])
export default route;