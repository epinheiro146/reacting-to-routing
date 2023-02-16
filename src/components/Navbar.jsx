import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav">
            <NavLink
                className={({ isActive }) => `nav-link ${isActive && 'bg-success text-white'}`}
                to='/'>
                Go Home
            </NavLink>
            <NavLink
                className={({ isActive }) => `nav-link ${isActive && 'bg-success text-white'}`}
                to='/films'>
                View Films
            </NavLink>
            <NavLink
                className={({ isActive }) => `nav-link ${isActive && 'bg-success text-white'}`}
                to='/people'>
                View People
            </NavLink>
        </div>
    );
}

export default Navbar;