import './Navbar.css'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Serviços</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </div>
    )
}

export default Navbar
