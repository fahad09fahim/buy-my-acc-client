import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);

  const handleLogout=()=>{
    return logOut()
    .then(res=>console.log(res))
  }

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/media">Accounts</Link>
      </li>
      <li>
        <a>Message</a>
      </li>
      
   
        {
          user?  
          <li><button onClick={handleLogout}>Logout</button></li>:
 <li><Link to='/login'>Login</Link></li>
        }
       
    
    </>
  );
  return (
    <div className="navbar bg-base-100 px-0 md:px-12">
      <div className="navbar-start">
        {/* small device navLinks */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        {/* logo */}
        <h2 className="text-xl font-semibold ">
          Buy My <span className="text-red-700">A</span>
          <span className="text-green-700">CC</span>
          <span className="text-blue-700">O</span>
          UNT
        </h2>
      </div>
      {/* large device navLinks */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
