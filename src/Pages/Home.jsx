import React, { useState } from 'react';
import {useLoaderData} from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar';
import Header from '../Shared/Header/Header';
import LeftSideNavbar from '../Shared/LeftSideNavbar/LeftSideNavbar';
import RightSideNavbar from '../Shared/RightSideNavbar/RightSideNavbar';
import NewsCard from './NewsCard';

const Home = () => {
    const [show,setShow]=useState(2)
 const newsData= useLoaderData()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className='grid md:grid-cols-4 gap-6'>
            <div> <LeftSideNavbar/> </div>

            <div className='col-span-2'>
            <h3 className="text-2xl font-semibold text-center">All Category</h3>
            {
                newsData.slice(0,show).map((news,id)=> <NewsCard key={id} news={news}></NewsCard> )
            }
                
            <div onClick={()=>setShow(newsData.length)} className={ `${show===newsData.length?"hidden":""}`} >
                <button className='btn btn-danger border-black'>Show All</button>
            </div>

            </div>



            <div><RightSideNavbar/> </div>
            </div>
          
        </div>
    );
};

export default Home;