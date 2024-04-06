import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-error"> breaking news  </button>

            <Marquee pauseOnHover="false" speed={30}> 
            <Link className="mr-3" to="/"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem non dicta? Ipsum, autem?</Link>
            <Link className="mr-3" to="/"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem non dicta? Ipsum, autem?</Link>
            <Link className="mr-3" to="/"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem non dicta? Ipsum, autem?</Link>
            </Marquee>
            
        </div>
    );
};

export default BreakingNews;