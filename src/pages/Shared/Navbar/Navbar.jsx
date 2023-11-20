import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import './Navbar.css'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {

      })
      .catch(error => console.log(error))
  }

  const navItems = (
    <>
      <li className="font-semibold"><Link to="/">Home</Link></li>

      {user?.email ? <>
        <li className="font-semibold"><Link to="/addToy">Add A Toy</Link></li>
        <li className="font-semibold"><Link to="/toys">All Toys</Link></li>
        <li className="font-semibold"><Link to="/mytoys">My Toys</Link></li>
        <li className="font-semibold"><Link to='/blog'>Blogs</Link></li>
        <li><button className="btn btn-info" onClick={handleLogout}>Log out</button></li>
      </>
        : <>
          <li className="font-semibold uppercase"><Link to="/about">About</Link></li>
          <li className="font-semibold uppercase"><Link to="/store">Store</Link></li>
          <li className="font-semibold uppercase"><Link to='/contact'>Contact</Link></li>
          <li className="font-semibold uppercase"><Link to='/register'>Register</Link></li>
          <Link to='/login'>
            <button className="btn flex justify-end uppercase">Login</button>
          </Link>

        </>
      }

    </>
  );

  return (
    <div className="navbar py-3 bg-pink-500">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-pink-500 rounded-box w-52 text-white">
            {navItems}
          </ul>
        </div>
        {/* Logo and Name */}
        <Link to="/" className=" normal-case text-3xl">
          <img className="navbar-logo me-5" src='/public/logo-nav.png' alt="" />
        </Link>
        <h3 className="navbar-title uppercase">storecode</h3>

      </div>
      <div className="navbar-center hidden lg:flex text-white">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?.photoURL ? <img style={{ width: '50px', marginRight: "15px", borderRadius: '50%' }} src={user.photoURL} alt="" /> : <></>

        }
      </div>
    </div>
  );
};

export default Navbar;