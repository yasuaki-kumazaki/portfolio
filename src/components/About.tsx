import React from "react";
import Image from "next/image";
import pic from "../../public/pic.png";

const About = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-3/10 flex items-center">
        <Image src={pic} alt="yasuaki" className="rounded-full w-full h-auto" />
      </div>
      <div className="w-7/10 flex items-center">
        <h2 className="text-3xl leading-10 px-10">
          University student at the Hamburg University of Applied Sciences
          pursuing a Bachelor of Science in Information Engineering with 3 years
          of work experience in a tech consulting firm.
        </h2>
      </div>
    </div>
  );
};

export default About;
