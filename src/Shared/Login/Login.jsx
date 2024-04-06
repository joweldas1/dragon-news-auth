import { Link , useLocation , useNavigate} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { authData } from "../ContextApi/AuthProvider";

const Login = () => {
    const {logUser}=useContext(authData)
    const location=useLocation();
    const navigate = useNavigate()
    console.log(location);

    const handleOnClick=(e)=>{
        e.preventDefault();
        const formControl=new FormData(e.currentTarget)
        const email=formControl.get('email');
        const password=formControl.get('password');
        console.log(email,password);

        logUser(email,password)
        .then((result) => {
          navigate(location?.state?location.state:'/')
            const user=result.user
            console.log(user);
        }).catch((err) => {
            const error=err.message;
            console.log(error); 
        });
        console.log(email,password);
    }



    return (
        <div>
            <Navbar/>
           <h4 className="text-center text-3xl">Please Login</h4>

          <div >
          <form onSubmit={handleOnClick} method="post" className="card-body lg:w-1/3 m-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
          </div>
          <h2>Don't have an account, please <Link to='/register' className="text-blue-500">Register</Link></h2>
        </div>
    );
};

export default Login;