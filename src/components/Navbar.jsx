import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-400">
      <div>
        <h1>Klay Clarke</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Projects</li>
        <li>Experience</li>
      </ul>
      {/* Hamburger Icon */}
      <ul className="md:hidden z-10">
        <li className="text-3xl">
          {!nav ? (
            <FaBars onClick={handleClick} />
          ) : (
            <FaTimes onClick={handleClick} />
          )}
        </li>
      </ul>
      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">Projects</li>
          <li className="py-6 text-4xl">Experience</li>
        </ul>
      </div>
    </nav>
  );
}
