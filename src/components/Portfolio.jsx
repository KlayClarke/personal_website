import { useState } from "react";

export default function Portfolio() {
  const [currentProjectActive, setCurrentProjectActive] = useState("freshen");
  const handleClick = (e) => {
    setCurrentProjectActive(e.target.id);
  };

  return (
    <div name="portfolio" className="w-full h-screen border-b-2">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-4">
          <div className="pb-8">
            <p className="text-4xl items-end font-bold inline">Portfolio</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid md:grid-cols-2 gap-4">
          <div>
            <p
              id="freshen"
              className="text-4xl cursor-pointer hover:underline"
              onClick={handleClick}
            >
              freshen
            </p>
            <p
              id="second_project"
              className="text-4xl cursor-pointer hover:underline"
              onClick={handleClick}
            >
              second_project
            </p>
            <p
              id="third_project"
              className="text-4xl cursor-pointer hover:underline"
              onClick={handleClick}
            >
              third_project
            </p>
          </div>
          <div className={currentProjectActive != "freshen" ? "hidden" : ""}>
            <p className="text-2xl">freshen</p>
          </div>
          <div
            className={currentProjectActive != "second_project" ? "hidden" : ""}
          >
            <p className="text-2xl">second_project</p>
          </div>
          <div
            className={currentProjectActive != "third_project" ? "hidden" : ""}
          >
            <p className="text-2xl">third_project</p>
          </div>
        </div>
      </div>
    </div>
  );
}
