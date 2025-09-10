import Image from "next/image";
import { FaCss3Alt, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiC,
  SiDocker,
  SiFastapi,
  SiGitlab,
  SiJavascript,
  SiMantine,
  SiPostgresql,
  SiSqlalchemy,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import pic from "../../public/pic.png";
import tanstackLogo from "../../public/tanstack-logo.png";

const SkillIcons = () => {
  return (
    <>
      {/* Programming Languages */}
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <SiJavascript className="text-4xl" />
        <h2 className="text-xs text-wrap text-center">JavaScript</h2>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <SiTypescript className="text-4xl" />
        <h2 className="text-xs text-wrap text-center">TypeScript</h2>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <FaJava className="text-4xl" />
        <h2 className="text-xs text-wrap text-center">Java</h2>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <SiC className="text-4xl" />
        <h2 className="text-xs text-wrap text-center">C</h2>
      </div>

      {/* Frontend */}
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <FaHtml5 className="text-4xl" />
        <h2 className="text-xs text-wrap text-center">HTML</h2>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <FaCss3Alt className="text-4xl" />
        <h2 className="text-xs text-wrap text-center">CSS</h2>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <RiTailwindCssFill className="text-4xl" />
        <h2 className="text-xs text-wrap text-center">Tailwind CSS</h2>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <FaReact className="text-4xl" />
        <h2 className="text-xs text-wrap text-center">React</h2>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <TbBrandNextjs className="text-4xl" />
        <h2 className="text-xs text-center">Next.js</h2>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <SiMantine className="text-4xl" />
        <h2 className="text-xs text-center">Mantine</h2>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <Image src={tanstackLogo} alt="TanStack Logo" width={40} height={40} />
        <h2 className="text-xs text-center">TanStack</h2>
      </div>

      {/* Backend & Databases */}
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <SiFastapi className="text-4xl" />
        <h2 className="text-xs text-center">FastAPI</h2>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <SiSqlalchemy className="text-4xl" />
        <h2 className="text-xs text-center">SQLAlchemy</h2>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <SiPostgresql className="text-4xl" />
        <h2 className="text-xs text-center">PostgreSQL</h2>
      </div>

      {/* DevOps & Tools */}
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <SiDocker className="text-4xl" />
        <h2 className="text-xs text-center">Docker</h2>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg bg-stone-300 dark:bg-stone-800 gap-2 w-28 h-28">
        <SiGitlab className="text-4xl" />
        <h2 className="text-xs text-center">GitLab CI/CD</h2>
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
              Hamburg University of Applied Sciences (expected graduation: March
              2026).
            </p>
            <p className="text-xl lg:text-2xl font-minionPro">
              I am now seeking a{" "}
              <span className="font-semibold">thesis student position</span>
              where I can combine my academic research with practical
              contributions in full-stack software engineering.
            </p>
            <p className="text-xl lg:text-2xl font-minionPro">
              Recently I completed a full-stack development internship at{" "}
              <span className="font-semibold">Rockect Factory Augsburg</span>,
              and previously I worked for three years as an Application
              Development Senior Analyst at Accenture Japan.
            </p>
          </div>
        </div>
        {/* experience */}
        <div className="flex flex-col items-center gap-10">
          <div>
            <h1 className="text-2xl lg:text-4xl">Experience</h1>
          </div>
          <div>
            <div className="text-xl lg:text-2xl">
              <h2 className="pb-2 font-minionPro">
                Full-Stack Software Development Engineering Intern @ Rocket
                Factory Augsburg (Mar - Sep 2025)
              </h2>
              <ul className="px-4 font-minionPro">
                <li>
                  - Developed and maintained internal tools to manage hardware
                  data and workflows
                </li>
                <li>
                  - Extended backend APIs using FastAPI, SQLAlchemy, and Alembic
                </li>
                <li>- Enhanced UI with React.js, Mantine, and TanStack</li>
                <li>- Contributed to CI/CD pipelines with GitLab</li>
              </ul>
            </div>

            <div className="text-xl lg:text-2xl">
              <h2 className="py-2 font-minionPro">
                Application Development Senior Analyst @ Accenture Japan Ltd
                (2017 - 2020)
              </h2>
              <ul className="px-4 font-minionPro">
                <li>
                  - Developed applications on SAP Cloud Platform using
                  JavaScript, Java, and ABAP
                </li>
                <li>
                  - Configured environments for SAP S/4 HANA system migration
                </li>
                <li>
                  - Collaborated with cross-functional teams on enterprise
                  projects
                </li>
              </ul>
            </div>
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
