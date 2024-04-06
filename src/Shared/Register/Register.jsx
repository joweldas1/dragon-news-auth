import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { authData } from "../ContextApi/AuthProvider";

const Register = () => {
    const {createUser}=useContext(authData)
    const handleOnClick=(e)=>{
    e.preventDefault();

    const form=new FormData(e.currentTarget);
    const name=form.get('name')
    const url=form.get('url')
    const email=form.get('email')
    const password=form.get('password')
// till this ok
    createUser(email,password)
        .then((result) => {
            const user=result.user
            console.log(user);
        }).catch((err) => {
            const error=err.message;
            console.log(error);
    });
    console.log(name,email,url,password);
}


    return (
        <div>
            <Navbar/>
           <h4 className="text-center text-3xl">Please Sing in</h4>

          <div >
          <form onSubmit={handleOnClick} method="post" className="card-body lg:w-1/3 m-auto">
          <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input name="name" type="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photo url</span>
          </label>
          <input name="url" type="url" placeholder="phot url" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Sign in</button>
        </div>
      </form>
          </div>
          <h2>Already have an account, please <Link to='/login' className="text-blue-500">Register</Link></h2>
        </div>
    );
};

export default Register;