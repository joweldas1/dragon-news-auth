import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const{image_url , title , details,_id}=news
    console.log(news);
    return (
        <div>
            <div className='my-10'>
                <img className='' src={image_url} alt="" />
                <h3 className='text-2xl font-semibold my-3'>{title}</h3>
                {
                    details.length>40? <div> <p>{details.slice(0,200)}</p> <Link  className='text-blue-800 font-semibold' to={`/news/${_id}`} > See More</Link></div> : <p>{details}</p>
                }
            </div>
        </div>
    );
};

export default NewsCard;