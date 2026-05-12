import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
    const {darkMode, themeToggler} = useContext(ThemeContext);
    return (
        <>
            {/* <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul> */}
            <nav className="flex bg-yellow-500 p-4 text-white gap-4 justify-center">
                <Link to="">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={themeToggler}>{darkMode? "Light Mode" : "Dark Mode"}</button>
            </nav>
        </>
    )
}

export default Navbar;