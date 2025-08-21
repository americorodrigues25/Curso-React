// css
import styles from './Navbar.module.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <NavLink to="/" className={styles.brand}>
                    Dev <span>Blog</span>
                </NavLink>
                <ul className={styles.links_list}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>Sobre</NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
