import React, { useState } from "react";
import Image from "next/image";

const Portofolio = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleCollapse1 = () => {
    setIsExpanded1(!isExpanded1);
  };
  const toggleCollapse2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  return (
    <div id="portofolio">
      <h2 className="flex justify-center text-3xl text-gray-600 dark:text-white">
        Portofolio
      </h2>
      <hr className="h-px my-10 flex bg-gray-200 border-0 dark:bg-gray-700 m-20" />
      <div className="lg:flex lg:justify-between lg:mr-28 lg:ml-28 sm:ml-40 max-sm:ml-16 mb-16">
        <div className="block max-w-xs h-fit sm:mb-10 max-sm:mb-10 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <Image
            className="rounded-t-lg mt-3 mb-5"
            src="/2.png"
            alt=""
            width={300}
            height={200}
          />
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Putter
            </h5>
            <p className="mb-7 text-sm font-light leading-tight text-neutral-800 dark:text-neutral-50">
              (Mobile App)
            </p>
            {isExpanded && (
              <p className="ease-in duration-200 mb-4 text-base text-neutral-600 dark:text-neutral-200">
                I help the communication of golf athletes in Cikarang by
                creating an android application (Flutter) to make it easier to
                calculate scores in golf games according to the location of the
                golf course.
              </p>
            )}
            <button
              type="button"
              className="hover:scale-105 ease-in duration-200 inline-block rounded bg-emerald-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-emerald-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-emerald-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-emereald-700"
              onClick={toggleCollapse}
            >
              {isExpanded ? "Less" : "Read More"}
            </button>
          </div>
        </div>
        <div className="block max-w-xs h-fit sm:mb-10 max-sm:mb-10 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <div className="flex justify-center">
            <Image
              className="rounded-t-lg mt-5 mr-20 ml-20"
              src="/4.png"
              alt=""
              width={172}
              height={179}
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Tanjidor Ecommerce
            </h5>
            <p className="mb-7 text-sm font-light leading-tight text-neutral-800 dark:text-neutral-50">
              (Mobile App)
            </p>
            {isExpanded1 && (
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                I help companies in making android applications (Flutter) to
                simplify the process of buying and ordering goods online.
              </p>
            )}
            <button
              type="button"
              className="hover:scale-105 ease-in duration-200 inline-block rounded bg-emerald-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-emerald-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-emerald-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-emereald-700"
              onClick={toggleCollapse1}
            >
              {isExpanded1 ? "Less" : "Read More"}
            </button>
          </div>
        </div>
        <div className="block max-w-xs h-fit sm:mb-10 max-sm:mb-10 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
            <Image
              className="rounded-t-lg mt-3 mb-6"
              src="/5.png"
              alt=""
              width={295}
              height={200}
            />
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Tanjidor Ecommerce Webmin
            </h5>
            <p className="mb-7 text-sm font-light leading-tight text-neutral-800 dark:text-neutral-50">
              (Web App)
            </p>
            {isExpanded2 && (<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              I'm helping a company create a web application (Laravel) to make
              the admin easier in the process of selling goods.
            </p>)}
            <button
              type="button"
              className="hover:scale-105 ease-in duration-200 inline-block rounded bg-emerald-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-emerald-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-emerald-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-emereald-700"
              onClick={toggleCollapse2}
            >
              {isExpanded2 ? "Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>
      <hr className="h-px my-10 flex bg-gray-200 border-0 dark:bg-gray-700 m-20"/>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
    </div>
  );
};

export default Portofolio;
