import React from 'react';
import {useLoaderData} from 'react-router-dom'
import Navbar from '../Shared/Navbar/Navbar';
import Header from '../Shared/Header/Header';
import LeftSideNavbar from '../Shared/LeftSideNavbar/LeftSideNavbar';
import RightSideNavbar from '../Shared/RightSideNavbar/RightSideNavbar';
import NewsCard from './NewsCard';

const Home = () => {
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
                newsData.map((news,id)=> <NewsCard key={id} news={news}></NewsCard> )
            }
            


            </div>



            <div><RightSideNavbar/> </div>
            </div>
          
        </div>
    );
};

export default Home;