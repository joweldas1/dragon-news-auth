import React from 'react';
import {useParams} from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar';
import Header from '../Shared/Header/Header';
import RightSideNavbar from '../Shared/RightSideNavbar/RightSideNavbar';

const NewsDetails = () => {
    const {id}=useParams()
    console.log(id);
    return (
        <div>
            <Header/>
            <Navbar/>
            <div>
                <div className='grid grid-cols-4'>
                    <div className='col-span-3'>
                        <h3>Details</h3>
                    </div>
                    <div><RightSideNavbar /> </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;