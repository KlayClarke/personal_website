import { useState } from "react";

export default function Portfolio() {
  const [currentProjectActive, setCurrentProjectActive] = useState("freshen");
  const handleClick = (e) => {
    setCurrentProjectActive(e.target.id);
  };

  return (
    <div name="portfolio" className="w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-4">
          <div className="pb-8">
            <p className="text-4xl items-end font-bold inline">Portfolio</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] min-h-[600px] w-full px-4 grid md:grid-cols-2 gap-4">
          <div>
            <p
              id="freshen"
              className={`project-toggle text-4xl cursor-pointer hover:underline ${
                currentProjectActive == "freshen" ? "active" : ""
              }`}
              onClick={handleClick}
            >
              freshen
            </p>
            <p
              id="second_project"
              className={`project-toggle text-4xl cursor-pointer hover:underline ${
                currentProjectActive == "second_project" ? "active" : ""
              }`}
              onClick={handleClick}
            >
              klayclarke.com
            </p>
            <p
              id="third_project"
              className={`project-toggle text-4xl cursor-pointer hover:underline ${
                currentProjectActive == "third_project" ? "active" : ""
              }`}
              onClick={handleClick}
            >
              third_project
            </p>
            <p
              id="fourth_project"
              className={`project-toggle text-4xl cursor-pointer hover:underline ${
                currentProjectActive == "fourth_project" ? "active" : ""
              }`}
              onClick={handleClick}
            >
              fourth_project
            </p>
          </div>
          <div
            className={currentProjectActive != "freshen" ? "hidden" : "active"}
          >
            <img src="" alt="" className="border-4 border-black h-[250px]" />
            <br />
            <p className="text-2xl">
              "freshen" is a Yelp-like assistant that helps users find reputable
              and trustworthy hairstylists across the tri-state area. Users who
              own hair salons and barbershops can also add their own shop to our
              database, making it available to others.
            </p>
            <br />
            <p className="text-2xl">Created using MongoDB, Express, Heroku</p>
            <br />
            <div className="flex">
              <a
                href="https://github.com/KlayClarke/freshenv2"
                target={"_blank"}
                className="project-links"
              >
                View Code On Github
              </a>
              <br />
              <br />
              <a
                href="https://thawing-reaches-97496.herokuapp.com/"
                target={"_blank"}
                className="project-links ml-4"
              >
                View Site
              </a>
            </div>
          </div>
          <div
            className={
              currentProjectActive != "second_project" ? "hidden" : "active"
            }
          >
            <img src="" alt="" className="border-4 border-black h-[250px]" />
            <br />
            <p className="text-2xl">
              "klayclarke.com" is meant to be both a portfolio and personal
              website. This site allowed me to gain comfortability using a CSS
              framework, while also strengthening my ability to work with React.
            </p>
            <br />
            <p className="text-2xl">
              Created using React, Tailwind CSS, Vercel
            </p>
            <br />
            <div className="flex">
              <a
                href="https://github.com/KlayClarke/personal_website"
                target={"_blank"}
                className="project-links"
              >
                View Code On Github
              </a>
            </div>
          </div>
          <div
            className={
              currentProjectActive != "third_project" ? "hidden" : "active"
            }
          >
            <p className="text-2xl">third_project coming soon</p>
          </div>
          <div
            className={
              currentProjectActive != "fourth_project" ? "hidden" : "active"
            }
          >
            <p className="text-2xl">fourth_project coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
