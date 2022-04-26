export default function Experience() {
  return (
    <div name="experience" className="w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-4">
          <div className="pb-8">
            <p className="text-4xl font-bold inline">Work Experience</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4">
          <table className="border-2">
            <tr className="border-b-2">
              <td className=" relative w-[75%] min-w-[50%]">
                March 2019 - May 2021
              </td>
              <td className=" relative w-[75%] min-w-[50%]">
                University of Connecticut, Department of Sociology [Student
                Research Review Assistant for Dr. Jeremy Pais]
              </td>
            </tr>
            <tr>
              <td className=" relative w-[75%] min-w-[50%]">
                July 2018 - Aug 2021
              </td>
              <td className=" relative w-[75%] min-w-[50%]">
                Hartford Hospital, Hartford CT [Food and Nutrition Service
                Associate]
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
