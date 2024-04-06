import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNavbar = () => {
    const [news,setNews]=useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setNews(data))
    },[])

    
    console.log(news);
    return (
        <div className="border">
            <h3 className="text-2xl font-semibold">All Category</h3>
            {
                news.map((category,idx)=> 
                <Link  to={`/category/${category.id}`} key={idx} 
                 className="block mt-2 text-center font-semibold hover:bg-gray-300 py-3 rounded-lg">
                    {category.name},
                 </Link> )
            }

        </div>
    );
};

export default LeftSideNavbar;