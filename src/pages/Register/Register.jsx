import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Register = () => {

    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email,data.password)
    .then(res=>{
        const user = res.user
        navigate(from, { replace: true })
    })
    .then(()=>{
        reset()
    })
  };

  return (
    <div className=" flex justify-center py-5 bg-slate-400">
      <div className="card w-full max-w-sm  bg-base-100">
        <h1 className="text-center text-2xl py-2 font-semibold">
          Register Now
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              {...register("name", {
                required: true,
                maxLength: 25,
              })}
            />

            {errors.name && (
              <span className="text-red-500">Please insert Name.</span>
            )}
          </div>
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
              {...register("password", { required: true,   pattern: {
                value: /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/,
                message: "Password must contain at least one uppercase letter and one special character with a minimum of 6 characters.",
              }})}
            />
            {errors.password && (
                <span className="text-red-500">
                 {errors.password.message} 
                </span>
              )}
            <label className="label">
              <Link to='/login' className="label-text-alt link link-hover">
                Already Have an account? Login Now
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn  btn-info">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
