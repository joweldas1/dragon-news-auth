import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home';
import Login from '../Shared/Login/Login';
import Register from '../Shared/Register/Register';
import NewsDetails from '../Pages/NewsDetails';
import PrivateRoute from '../Pages/PrivateRoute';

const Routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/news.json')
            },
            {   path:'/news/:id',
                 element: <PrivateRoute > <NewsDetails/></PrivateRoute>
            },
            {
                path:"/login",
                element:<Login/>
            },
          {
            path:'register',
            element:<Register/>
          }
        ]
    }
])

export default Routes;