"use client";

import React, { useEffect } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <div className="flex items-center h-screen max-w-screen-2xl mx-auto md:px-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          <div className="flex flex-col justify-between items-start gap-4 max-w-screen-xl ">
            <h2 className="text-3xl lg:text-5xl">Contact me!</h2>
            <h3 className="text-2xl lg:text-2xl">
              Have any questions? Fill out the form and I&apos;ll get you a
              response soon!
            </h3>
            <p className="font-minionPro">
              Feel free to ask / inquire about anything.
            </p>
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/yasuaki-kumazaki/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin href="" className="cursor-pointer text-2xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yasuaki-kumazaki"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub className="cursor-pointer text-2xl" />
                </a>
              </li>
            </ul>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col font-mono gap-4 text-xl lg:text-2xl">
              <div className="flex flex-col gap-2">
                <h2>Name</h2>
                <div className="flex justify-between gap-2 text-base lg:text-lg">
                  <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      autoComplete="given-name"
                      className="w-full h-10 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-orange-400"
                      {...register("firstName", {
                        required: "First Name is required.",
                      })}
                    />
                    {errors.firstName && (
                      <p className="errorMsg text-red-500 text-sm">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      autoComplete="family-name"
                      className="w-full h-10 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-orange-400 "
                      {...register("lastName", {
                        required: "Last Name is required.",
                      })}
                    />
                    {errors.lastName && (
                      <p className="errorMsg text-red-500 text-sm">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  autoComplete="on"
                  className="w-full h-10 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-orange-400 text-base lg:text-lg"
                  {...register("email", { required: "Email is required." })}
                />
                {errors.email && (
                  <p className="errorMsg text-red-500 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full h-32 hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-orange-400 text-base lg:text-lg"
                  {...register("message", { required: "message is empty." })}
                />
                {errors.message && (
                  <p className="errorMsg text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div>
                <button className="bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-800 py-2 px-4 rounded-md focus:outline-orange-400">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
