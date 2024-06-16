import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <h2>
        {/* Contact me! Have any questions? Fill out the form and I'll get you a
        response soon! Feel free to ask / inquire about anything (school,
        basketball, internships, music, etc). Hoping to be a resource and be of
        help in your journey in any way possible. Similarly, please use this
        form or email directly me if your message regards a NIL opportunity.
        kaylapadilla.business@gmail.com */}
      </h2>
      <ul>
        <li>
          <AiFillLinkedin className="cursor-pointer text-2xl ml-4" />
        </li>
        <li>
          <AiFillGithub className="cursor-pointer text-2xl ml-4" />
        </li>
      </ul>
    </div>
  );
};

export default Contact;
