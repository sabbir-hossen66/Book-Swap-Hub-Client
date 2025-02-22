import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Nav.css'
import { AuthContext } from "../../Providers/AuthProviders";



const Nav = () => {
  const { user, logOut, } = useContext(AuthContext)
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch()
  }

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])

  const handleToggle = (e) => {

    e.preventDefault()

    if (e.target.checked) {
      setTheme('synthwave')
      localStorage.setItem('theme', 'synthwave')
    }
    else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  const navLinks = <>
    <li className="head-section font-semibold"><NavLink to={'/'}>Home</NavLink></li>
    <li className="head-section font-semibold"><NavLink to={'/my-queries'}>Quries</NavLink></li>
    {
      user?.email ?
        <>
          <li className="head-section font-semibold"><NavLink to={'/see_recom'}>Recommendations
            For Me</NavLink></li>
          <li className="head-section font-semibold"><NavLink to={'/my_query'}>MyQuries</NavLink></li>
          <li className="head-section font-semibold"><NavLink to={'/add-quries'}>AddQuries</NavLink></li>
          <li className="head-section font-semibold"><NavLink to={'my_recom'}>My recommendations</NavLink></li>
        </>
        :
        <>
          {/* <button className="navbar-end"><Link to={'/login'}>login</Link></button> */}
        </>
    }

  </>

  return (
    <div className="head-background navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn-success lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Link to={'/'}>
            <img className="w-10 lg:w-20 mr-2" src="https://i.ibb.co/9bqV9p3/book-logho-removebg-preview.png" alt="" />
          </Link>
          {/* <Link to={'/'}> <p className="text-sm lg:text-2xl font-montserrat font-bold text-[#002c42]">
            <span className="text-orange-400">Book<span className="text-purple-600">_S</span>wap</span><span className="text-purple-600">_H</span><span className="text-orange-400">ub</span></p></Link> */}
          <Link to={'/'}> <p className="text-sm lg:text-2xl font-montserrat font-bold text-[#002c42]">
            <span className="text-orange-400">Book<span className="text-purple-600">S</span>wap</span><span className="text-purple-600">H</span><span className="text-orange-400">ub</span></p></Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        {/* theme controller */}
        <label onChange={handleToggle} className="w-10 lg:w-20 h-16 swap swap-rotate text-[#002c42]">

          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="theme-controller" value="synthwave" />

          {/* sun icon */}
          <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

          {/* moon icon */}
          <svg className="swap-on fill-current w-8 h-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

        </label>

        {/* navbar End Button */}
        {

          user ?

            <div className="flex justify-center items-center">

              {/* dropdwon */}

              <div className="dropdown dropdown-hover">

                <div className="avatar online">
                  <div className="w-12 rounded-full">
                    <img src={user.photoURL} />
                  </div>

                </div>
                {/* <ul tabIndex={0} className="dropdown-content z-[1] mb-2 menu p-2 shadow bg-indigo-300 font-semibold rounded-box w-40 text-white">
                  <li>Name- {user.displayName}</li>
                </ul> */}
                <ul tabIndex={0} className="dropdown-content z-[1] mb-2 menu p-2 shadow bg-indigo-300 font-semibold rounded-box w-52 text-white">
                  <li>{user.displayName}</li>
                  <li>{user.email}</li>
                </ul>

              </div>

              <div>
                <button onClick={handleLogOut} type="button" className="Yellow-Button rounded relative px-6 py-2 lg:px-10 lg:py-3 ml-4 overflow-hidden font-semibold ">LogOut
                </button>
              </div>

            </div>
            :
            <div>
              <Link to={'/login'}>
                <button type="button" className="Yellow-Button rounded relative px-6 py-2 lg:px-10 lg:py-3 ml-4 overflow-hidden font-semibold ">Login</button>
              </Link>
            </div>

        }

      </div>
    </div>
  );
};

export default Nav;