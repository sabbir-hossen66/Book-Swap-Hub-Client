

import { NavLink } from 'react-router-dom'
import './App.css'
// import logo from './logo.png';
function App() {


  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <span className="brand-name">Your Brand Name</span>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <NavLink to="/" className="navbar-link" activeClassName="active-link">Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/about" className="navbar-link" activeClassName="active-link">About</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/services" className="navbar-link" activeClassName="active-link">Services</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact" className="navbar-link" activeClassName="active-link">Contact</NavLink>
        </li>
      </ul>
      <button className="login-button">Login</button>
    </nav>
  )
}

export default App
