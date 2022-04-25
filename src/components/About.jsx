export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-white text-black border-b-2"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-4">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-black">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-4xl">
              My technological interests derived somewhat unconventionally:
            </p>
          </div>
          <div>
            <p className="text-2xl">
              While in college, I began producing music - both as a means of
              escape and creative expression. The learning curve was steep, but
              music production software such as Ableton and Logic Pro X use AI
              to assist users, making it rather easy for beginners to get
              started.
            </p>
            <br />
            <p className="text-2xl">
              I'd also fell in love with Stata and R, statistical software that
              helped me analyze and manipulate data while serving as a novice
              research assistant in UConn's Sociology Department.
            </p>
            <br />
            <p className="text-2xl">
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
