import { CiMail } from "react-icons/ci";
import { Link } from "react-scroll";
// import { NavLink } from "react-router-dom";

const NavBar = () => {
    // const links = <>
    //     <NavLink to="/" className={({ isActive }) => isActive ? "bg-sky-950 px-4 py-2 text-white font-medium rounded" : "px-4 py-2 bg-transparent rounded"}>Home</NavLink>
    //     <NavLink to="/services" className={({ isActive }) => isActive ? "bg-sky-950 px-4 py-2 text-white font-medium rounded" : "px-4 py-2 bg-transparent rounded"}>Services</NavLink>
    //     <NavLink to="/works" className={({ isActive }) => isActive ? "bg-sky-950 px-4 py-2 text-white font-medium rounded" : "px-4 py-2 bg-transparent rounded"}>Works</NavLink>
    //     <NavLink to="/resume" className={({ isActive }) => isActive ? "bg-sky-950 px-4 py-2 text-white font-medium rounded" : "px-4 py-2 bg-transparent rounded"}>Resume</NavLink>
    //     <NavLink to="/skills" className={({ isActive }) => isActive ? "bg-sky-950 px-4 py-2 text-white font-medium rounded" : "px-4 py-2 bg-transparent rounded"}>Skills</NavLink>
    //     <NavLink to="/contact" className={({ isActive }) => isActive ? "bg-sky-950 px-4 py-2 text-white font-medium rounded" : "px-4 py-2 bg-transparent rounded"}>Contact</NavLink>

    // </>
    const links = <>
        <a href="/" className="px-4 py-2 bg-transparent rounded">Home</a>
        <Link to="services" spy={true} smooth={true} duration={500} className="px-4 py-2 bg-transparent rounded scroll-smooth cursor-pointer">Services</Link>
        <Link to="works" spy={true} smooth={true} duration={500} className="px-4 py-2 bg-transparent rounded scroll-smooth cursor-pointer">Works</Link>
        <Link to="resume" spy={true} smooth={true} duration={500} className="px-4 py-2 bg-transparent rounded scroll-smooth cursor-pointer">Resume</Link>
        <Link to="skills" spy={true} smooth={true} duration={500} className="px-4 py-2 bg-transparent rounded scroll-smooth cursor-pointer">Skills</Link>
        <Link to="contact" spy={true} smooth={true} duration={500} className="px-4 py-2 bg-transparent rounded scroll-smooth cursor-pointer">Contact</Link>
    </>
    return (
        <div className="navbar bg-base-100 pt-10 pb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-40 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="xl:flex justify-center items-center gap-x-2 hidden"><CiMail className="text-lg" /><h6 className="text-sm">vivianrionmarandi@gmail.com</h6></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-neutral-700 gap-x-3 text-sm">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button type="button" className="px-6 py-2 font-semibold rounded-full bg-sky-950 text-white">Hire Me</button>
            </div>
        </div>
    );
};

export default NavBar;