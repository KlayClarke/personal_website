import { Link } from "react-scroll";

export default function Home() {
  return (
    <div
      name="home"
      className="relative w-full min-h-screen md:h-screen pt-48 md:pt-0n bg-[#0a192f]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full fade-in-right">
        <h1 className="text-4xl md:text-7xl font-bold text-[#ccd6f6] name-logo max-w-fit fade-in-right">
          Klay Clarke
        </h1>
        <h2 className="text-3xl md:text-7xl font-bold text-[#8289a0]">
          Web Developer
        </h2>
        <p className="text-1xl text-[#8289a0] py-4 max-w-[750px]">
          Klay is a MERN developer who embraces the cycle of learning, trying,
          and failing until he succeeds. Currently focused on building web
          applications, he one day hopes to contribute to the software that make
          modern music production possible.
        </p>
        <div>
          <Link to="portfolio" smooth={true} duration={2000}>
            <button className="text-white border-2 px-10 py-3 my-3 hover:bg-white hover:border-white hover:text-black slow-fade">
              View Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
