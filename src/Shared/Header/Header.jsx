import logo from '../../assets/logo.png';
import moment from 'moment';
import BreakingNews from './BreakingNews';

const Header = () => {
    return (
        <div className='text-center'>
            <img src={logo} alt="" className='mx-auto' />
            <p className='text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-semibold'>{moment().format("dddd, MMMM D YYYY")}</p>
            <BreakingNews/>
        </div>
    );
};

export default Header;