import React from "react";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact">
      <div className="bg-slate-800 bg-auto h-fit">
        <div className="p-10">
          <h2 className="text-2xl text-gray-200 mb-3">Contact Me</h2>
          <p className="text-sm text-gray-200">
            I as a Front-End developer are ready to help you,{" "}
          </p>
          <p className="text-sm text-gray-200">Start by contacting me</p>
          <a
            type="button"
            className="mt-5 text-gray-900 bg-white hover:scale-110 ease-in duration-200 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-2.5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
            href="mailto:leonardus18081999@gmail.com"
          >
            <AiOutlineMail size={20} />
          </a>
          <a
            type="button"
            className="m-5 text-gray-900 bg-white hover:scale-110 ease-in duration-200 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-2.5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
            href="https://bit.ly/3eRPQC3"
          >
            <AiFillLinkedin size={20} />
          </a>
          <a
            type="button"
            className=" text-gray-900 bg-white max-sm:mb-10 hover:scale-110 ease-in duration-200 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-2.5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
            href="https://bit.ly/3sgidNw"
          >
            <AiFillGithub size={20} />
          </a>
          <p className="text-sm text-gray-500 float-right lg:mt-20 sm:mt-20 max-sm:mt-3">
            © by Leonardus Audi Wibianto
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-br from-green-400 to-blue-600 h-3" />
    </div>
  );
};

export default Contact;
