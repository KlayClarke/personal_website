import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import useScrollPosition from "../hooks/useScrollPosition";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const scrollPosition = useScrollPosition();

  console.log(scrollPosition);

  return (
    <nav
      className={`${
        scrollPosition > 700
          ? "bg-white text-[#0a192f] border-b-[1px] border-[lightgray] fade-in-top"
          : "bg-[#0a192f] text-white"
      } fixed w-full h-[80px] flex justify-between items-center px-4 z-10 fade-in-right`}
    >
      <div>
        <Link
          to="home"
          smooth={true}
          duration={1000}
          className="cursor-pointer"
        >
          <h1
            className={`${
              scrollPosition < 450 ? "hidden" : ""
            } text-xl md:text-[25px] font-bold name-logo`}
          >
            Klay Clarke
          </h1>
        </Link>
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            className="hover:underline"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            smooth={true}
            duration={1000}
            className="hover:underline"
          >
            Portfolio
          </Link>
        </li>
        {/* <li>
          <Link
            to="experience"
            smooth={true}
            duration={1000}
            className="hover:underline"
          >
            Experience
          </Link>
        </li> */}
      </ul>
      {/* Hamburger Icon */}
      <ul className="md:hidden z-10">
        <li className="text-3xl">
          {!nav ? (
            <FaBars onClick={handleClick} />
          ) : (
            <FaTimes onClick={handleClick} className="text-white" />
          )}
        </li>
      </ul>
      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-white flex flex-col justify-center items-center"
        }
      >
        <ul>
          {/* <li className="py-6 text-4xl">
            <Link to="home" smooth={true} duration={1000} onClick={handleClick}>
              Home
            </Link>
          </li> */}
          <li className="py-6 text-4xl">
            <Link
              to="about"
              smooth={true}
              duration={1000}
              onClick={handleClick}
            >
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              to="portfolio"
              smooth={true}
              duration={1000}
              onClick={handleClick}
            >
              Portfolio
            </Link>
          </li>
          {/* <li className="py-6 text-4xl">
            <Link
              to="experience"
              smooth={true}
              duration={1000}
              onClick={handleClick}
            >
              Experience
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
