import Image from "next/image";
import pic from "../../public/pic.png";
import { FaCss3Alt, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiC, SiJavascript, SiTypescript } from "react-icons/si";

const SkillIcons = () => {
  return (
    <>
      {/* html */}
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <FaHtml5 className="text-4xl" />
        <h2 className="text-xs text-wrap text-center">HTML</h2>
      </div>
      {/* css */}
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <FaCss3Alt className="text-4xl" />
        <h2 className="text-xs text-wrap text-center">CSS</h2>
      </div>
      {/* typescript */}
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <SiTypescript className="text-4xl" />
        <h2 className="text-xs text-wrap text-center">TypeScript</h2>
      </div>
      {/* javascript */}
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <SiJavascript className="text-4xl" />
        <h2 className="text-xs text-wrap text-center">JavaScript</h2>
      </div>
      {/* react */}
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <FaReact className="text-4xl" />
        <h2 className="text-xs text-wrap text-center">React</h2>
      </div>
      {/* tailwind css */}
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <RiTailwindCssFill className="text-4xl" />
        <h2 className="text-xs text-wrap text-center">Tailwind CSS</h2>
      </div>
      {/* java */}
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <FaJava className="text-4xl" />
        <h2 className="text-xs text-wrap text-center">Java</h2>
      </div>
      {/* c */}
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <SiC className="text-4xl" />
        <h2 className="text-xs text-wrap text-center">C</h2>
      </div>
    </>
  );
};

export default function Home() {
  return (
    <>
      <div className="pt-20 md:pt-44 md:px-20 flex flex-col items-center justify-between h-screen max-w-screen-2xl mx-auto">
        {/* about */}
        <div className="py-10 flex flex-col-reverse lg:flex-row items-center justify-between lg:gap-20">
          <div className="flex items-center">
            <Image
              src={pic}
              alt="yasuaki"
              className="max-w-60 md:max-w-60 h-auto pt-12 md:pt-0"
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="text-3xl lg:text-5xl">Hi there!</h1>
            <p className="text-xl lg:text-2xl font-minionPro">
              I am Yasuaki Kumazaki from Japan. Currently, I live in Hamburg,
              Germany, where I am pursuing a B.S. in Information Engineering at
              Hamburg University of Applied Sciences.
            </p>
            <p className="text-xl lg:text-2xl font-minionPro">
              I am seeking a software engineering internship to apply the
              knowledge gained from my coursework and self-study while further
              honing my skills in software engineering.
            </p>
            <p className="text-xl lg:text-2xl font-minionPro">
              I have three years of experience developing software systems and
              applications at a tech consulting firm.
            </p>
          </div>
        </div>
        {/* experience */}
        <div className="flex flex-col items-center gap-10">
          <div>
            <h1 className="text-2xl lg:text-4xl">Experience</h1>
          </div>
          <div className="text-xl lg:text-2xl">
            <h2 className="pb-2 font-minionPro">
              Application Development Senior Analyst @ Accenture Japan Ltd (2017
              - 2020)
            </h2>
            <ul className="px-4 font-minionPro">
              <li>
                - System Development / System Migration (SAP Basis, Java, MSDB){" "}
              </li>
              <li>
                - Software Development (SAP Fiori, JavaScript, SAP Cloud
                Platform)
              </li>
              <li>- Project Management (Microsoft Office)</li>
            </ul>
          </div>
        </div>
        {/* skills */}
        <div className="text-2xl lg:text-4xl flex flex-col items-center gap-10 py-10">
          <h1>Skills</h1>
          {/* icons container */}
          <div className="font-mono flex flex-wrap justify-between items-center gap-4 md:gap-4">
            <SkillIcons />
          </div>
        </div>
      </div>
    </>
  );
}
