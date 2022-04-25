export default function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-5xl sm:text-7xl font-bold text-[#ccd6f6]">
          Klay Clarke
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8289a0]">
          Full Stack Developer
        </h2>
        <p className="text-2xl text-[#8289a0] py-4 max-w-[1000px]">
          Klay is a web developer who enjoys learning, trying, and failing until
          he succeeds. When not debugging code, Klay is likely producing
          horrible music (growth is gradual). Currently focused on building web
          applications, he one day hopes to contribute to the software that make
          modern music production possible.
        </p>
        <div>
          <button className="text-white border-2 px-10 py-3 my-3 hover:bg-white hover:border-white hover:text-black">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
