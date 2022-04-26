export default function About() {
  return (
    <div
      name="about"
      className="relative w-full md:h-screen pt-48 md:pt-0  bg-white text-black"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-4">
          <div className="pb-8">
            <p className="text-4xl font-bold inline">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid lg:grid-cols-2 gap-4">
          <div>
            <p className="text-4xl">
              My technological interests developed somewhat unconventionally:
            </p>
          </div>
          <div>
            <p className="text-xl md:text-2xl">
              While in college, I began producing music - both as a means of
              escape and creative expression. The learning curve was steep, but
              music production software such as{" "}
              <a
                href="https://www.ableton.com/en/"
                target={"_blank"}
                className="music-production-software-links"
              >
                Ableton
              </a>{" "}
              and{" "}
              <a
                href="https://www.apple.com/logic-pro/"
                target={"_blank"}
                className="music-production-software-links"
              >
                Logic Pro X
              </a>{" "}
              use code to intelligently assist users, making it rather easy for
              beginners to get started and experts to get the ball rolling.
            </p>
            <br />
            <p className="text-xl md:text-2xl">
              I'd also fell in love with{" "}
              <a
                href="https://www.stata.com/"
                target={"_blank"}
                className="data-science-software-links"
              >
                Stata
              </a>{" "}
              and{" "}
              <a
                href="https://www.r-project.org/"
                target={"_blank"}
                className="data-science-software-links"
              >
                R
              </a>{" "}
              , statistical software that helped me analyze and manipulate data
              while serving as a novice research assistant in UConn's Sociology
              Department.
            </p>
            <br />
            <p className="text-xl md:text-2xl">
              After graduation, I decided to learn more about (1) how these
              tools worked and (2) how teams of engineers collaborated to build
              such powerful software. I would soon find myself learning (and
              loving) Javascript and Python instead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
