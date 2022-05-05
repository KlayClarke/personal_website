import { useState } from "react";
import personalWebsiteImage from "../assets/personal_website_image.png";
import freshenImage from "../assets/freshen_image.png";
import freshenv3Image from "../assets/freshenv3.png";

export default function Portfolio() {
  const [currentProjectActive, setCurrentProjectActive] =
    useState("freshen_v3");
  const handleClick = (e) => {
    setCurrentProjectActive(e.target.id);
  };

  return (
    <div name="portfolio" className="relative w-full pt-48 md:pt-0 pb-48">
      <div className="flex flex-col justify-center items-center w-full min-h-[800px] md:h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-4">
          <div className="pb-8">
            <p className="text-2xl md:text-4xl items-end font-bold inline">
              Portfolio
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] min-h-[600px] w-full px-4 grid md:grid-cols-2 gap-4">
          <div>
            <p
              id="third_project"
              className={`project-toggle text-2xl md:text-4xl cursor-pointer hover:underline max-w-fit ${
                currentProjectActive == "third_project" ? "active" : ""
              }`}
              onClick={handleClick}
            >
              freshen.ios [coming soon]
            </p>
            <p
              id="freshen_v3"
              className={`project-toggle text-2xl md:text-4xl cursor-pointer hover:underline max-w-fit ${
                currentProjectActive == "freshen_v3" ? "active" : ""
              }`}
              onClick={handleClick}
            >
              freshen.v3
            </p>
            <p
              id="freshen"
              className={`project-toggle text-2xl md:text-4xl cursor-pointer hover:underline max-w-fit ${
                currentProjectActive == "freshen" ? "active" : ""
              }`}
              onClick={handleClick}
            >
              freshen.v2
            </p>
            <p
              id="second_project"
              className={`project-toggle text-2xl md:text-4xl cursor-pointer hover:underline max-w-fit ${
                currentProjectActive == "second_project" ? "active" : ""
              }`}
              onClick={handleClick}
            >
              klayclarke.com
            </p>
          </div>
          <div
            className={currentProjectActive != "freshen" ? "hidden" : "active"}
          >
            <img src={freshenImage} alt="" className="h-[250px]" />
            <br />
            <p className="text-xl md:text-2xl">
              "freshen" is a Yelp-like assistant that helps users find reputable
              and trustworthy hairstylists across the tri-state area. Users who
              own hair salons and barbershops can also add their own shop to our
              database, making it available to others.
            </p>
            <br />
            <p className="text-xl md:text-2xl">
              Created using Express, MongoDB, Heroku
            </p>
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
            <img src={personalWebsiteImage} alt="" className="h-[250px]" />
            <br />
            <p className="text-xl md:text-2xl">
              "klayclarke.com" is both a portfolio and personal website. This
              project allowed me to gain confidence using a CSS framework, while
              also strengthening my React skills.
            </p>
            <br />
            <p className="text-xl md:text-2xl">
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
            <img src={""} alt="" className="h-[250px] border-2 border-black" />
            <br />
            <p className="text-xl md:text-2xl">freshen.ios description here</p>
            <br />
            <p className="text-xl md:text-2xl">
              Created using [SwiftUI, MongoDB]
            </p>
            <br />
            <div className="flex">
              <a
                href="https://github.com/KlayClarke/freshen_ios"
                target={"_blank"}
                className="project-links"
              >
                View Code On Github
              </a>
              <br />
              <br />
              <a href="#" target={""} className="project-links ml-4">
                View Video Demo [Coming Soon]
              </a>
            </div>
          </div>
          <div
            className={
              currentProjectActive != "freshen_v3" ? "hidden" : "active"
            }
          >
            <img
              src={freshenv3Image}
              alt="freshen version 3"
              className="h-[250px] border-2"
            />
            <br />
            <p className="text-xl md:text-2xl">
              freshen version 3 description here
            </p>
            <br />
            <p className="text-xl md:text-2xl">
              Created using [NextJS, TailwindCSS, MongoDB (Prisma), Vercel]
            </p>
            <br />
            <div className="flex">
              <a
                href="https://github.com/KlayClarke/freshenv3"
                target={"_blank"}
                className="project-links"
              >
                View Code On Github
              </a>
              <br />
              <br />
              <a
                href="https://freshenv3.vercel.app/"
                target={"_blank"}
                className="project-links ml-4"
              >
                View Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
