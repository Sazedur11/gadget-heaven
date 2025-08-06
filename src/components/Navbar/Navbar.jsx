import { FiHeart } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
        <NavLink 
        to={'/'}
        className={({ isActive }) =>
                      isActive
                        ? "font-bold"
                        : "font-normal"
                    }
        >
            Home
        </NavLink>
        <NavLink 
        to={'/statistics'}
        className={({ isActive }) =>
                      isActive
                        ? "font-bold"
                        : "font-normal"
                    }
        >
            Statistics
        </NavLink>
      
    </>
  );

  return (
    <div className="navbar w-4/5 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink className="text-xl font-bold" to={'/'}>GadgetHeaven</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        <button className="w-8 h-8 flex items-center justify-center text-xl rounded-full bg-white text-black"><TiShoppingCart></TiShoppingCart></button>
        <button className="w-8 h-8 flex items-center justify-center text-xl rounded-full bg-white text-black"><FiHeart></FiHeart> </button>
      </div>
    </div>
  );
};

export default Navbar;
