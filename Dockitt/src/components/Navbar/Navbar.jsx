import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/tasklist' className='tab'>Current Tasks</NavLink>
      <NavLink to='/dashboard' className='tab'>Dashboard</NavLink>
    </nav>
  )
}

export default Navbar
