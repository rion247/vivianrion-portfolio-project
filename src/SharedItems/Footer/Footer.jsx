import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className="footer footer-center bg-sky-950 text-neutral-300 rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a href="/" className="px-4 py-2 bg-transparent rounded">Home</a>
                <Link to="services" spy={true} smooth={true} duration={500} className="px-4 py-2 bg-transparent rounded scroll-smooth cursor-pointer">Services</Link>
                <Link to="works" spy={true} smooth={true} duration={500} className="px-4 py-2 bg-transparent rounded scroll-smooth cursor-pointer">Works</Link>
                <Link to="resume" spy={true} smooth={true} duration={500} className="px-4 py-2 bg-transparent rounded scroll-smooth cursor-pointer">Resume</Link>
                <Link to="skills" spy={true} smooth={true} duration={500} className="px-4 py-2 bg-transparent rounded scroll-smooth cursor-pointer">Skills</Link>
                <Link to="contact" spy={true} smooth={true} duration={500} className="px-4 py-2 bg-transparent rounded scroll-smooth cursor-pointer">Contact</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-6 text-2xl">
                    <a href="https://github.com/rion247" target="_blank" >
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/vivianrion" target="_blank">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://www.facebook.com/vivianrion.marandi.3" target="_blank">
                        <FaFacebookF />
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © ${new Date().getFullYear()} - All right reserved by vivianrionmarandi@gmail.com</p>
            </aside>
        </footer>
    );
};

export default Footer;