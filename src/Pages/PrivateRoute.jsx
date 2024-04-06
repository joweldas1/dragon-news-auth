import React, { useContext } from 'react';
import { authData } from '../Shared/ContextApi/AuthProvider';
import {Navigate , useLocation} from 'react-router-dom'

const PrivateRoute = ({children }) => {
    const {user ,loading} = useContext(authData)
    const location = useLocation()
    console.log(location);


    if(loading){
        return <div className='text-center mt-32'> <span className="loading  text-9xl loading-spinner text-error"></span></div>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'} />
    
    
};

export default PrivateRoute;