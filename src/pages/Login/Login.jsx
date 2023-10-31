import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const {signIn}= useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
   
        formState: { errors },
      } = useForm();


      const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
        .then(res=>{
            const user = res.user
            console.log(user)
            navigate(from, { replace: true })
        })
        .catch((err)=>{
            const error = err.message
            setErrorMessage(error)
       
        })
      };
    return (
        <div className=" flex justify-center py-5 bg-slate-400">
        <div className="card w-full max-w-sm  bg-base-100">
          <h1 className="text-center text-2xl py-2 font-semibold">
          Login Now
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
           
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                })}
              />
               {errors.email && (
                  <span className="text-red-500">
                    Please insert valid email!
                  </span>
                )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true,})}
              />
         <span className="text-xs text-red-600">{errorMessage}</span>
              <label className="label">
                <Link to='/register' className="label-text-alt link link-hover">
                  New Here? Register Now
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;