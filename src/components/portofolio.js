import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";

const Portofolio = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isViewerPutter, setIsViewerPutter] = useState(false);
  const [isViewerEcommerce, setIsViewerEcommerce] = useState(false);
  const [isViewerWebmin, setIsViewerWebmin] = useState(false);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleCollapse1 = () => {
    setIsExpanded1(!isExpanded1);
  };
  const toggleCollapse2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  const putter = [
    "/putter-1.png",
    "/putter-2.png",
    "/putter-3.png",
    "/putter-4.png",
    "/putter-5.png",
    "/putter-6.png",
  ];

  const ecommerce = ["/ecommerce-1.png", "/ecommerce-2.png"];

  const webmin = [
    "/webmin-1.png",
    "/webmin-2.png",
    "/webmin-3.png",
    "/webmin-4.png",
  ];

  return (
    <div id="portofolio">
      {isViewerPutter ? (
        <ImageViewer
          src={putter}
          onClose={() => setIsViewerPutter(false)}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
          leftArrowComponent={<IoIosArrowBack size={30} className="text-gray-500"/>}
          rightArrowComponent={<IoIosArrowForward size={30} className="text-gray-500"/>}
          closeComponent={<IoIosClose size={30} className="text-gray-300"/>}
        />
      ) : isViewerEcommerce ? (
        <ImageViewer
          src={ecommerce}
          onClose={() => setIsViewerEcommerce(false)}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
          leftArrowComponent={<IoIosArrowBack size={30} className="text-gray-500"/>}
          rightArrowComponent={<IoIosArrowForward size={30} className="text-gray-500"/>}
          closeComponent={<IoIosClose size={30} className="text-gray-300"/>}
        />
      ) : isViewerWebmin ? (
        <ImageViewer
          src={webmin}
          onClose={() => setIsViewerWebmin(false)}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
          leftArrowComponent={<IoIosArrowBack size={30} className="text-gray-500"/>}
          rightArrowComponent={<IoIosArrowForward size={30} className="text-gray-500"/>}
          closeComponent={<IoIosClose size={30} className="text-gray-300"/>}
        />
      ) : null}

      <h2 className="flex justify-center text-3xl text-gray-600 dark:text-white">
        Portofolio
      </h2>
      <hr className="h-px my-10 flex bg-gray-200 border-0 dark:bg-gray-700 m-20" />
      <div className="lg:flex lg:justify-between lg:mr-28 lg:ml-28 sm:ml-40 max-sm:ml-12 mb-16">
        <div className="block max-w-xs h-fit sm:mb-10 max-sm:mb-10 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
          <Image
            className="cursor-pointer shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-300/30 rounded-t-lg mb-5 p-5"
            src="/2.png"
            alt=""
            width={300}
            height={100}
            onClick={() => setIsViewerPutter(true)}
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
              className="cursor-pointer shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-300/30 rounded-t-lg mt-5 mb-5 pr-20 pl-20"
              src="/4.png"
              alt=""
              width={400}
              height={200}
              onClick={() => setIsViewerEcommerce(true)}
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
            className="cursor-pointer shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-300/30 rounded-t-lg mt-3 mb-5 w-full"
            src="/5.png"
            alt=""
            width={295}
            height={200}
            onClick={() => setIsViewerWebmin(true)}
          />
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Tanjidor Ecommerce Webmin
            </h5>
            <p className="mb-7 text-sm font-light leading-tight text-neutral-800 dark:text-neutral-50">
              (Web App)
            </p>
            {isExpanded2 && (
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                I'm helping a company create a web application (Laravel) to make
                the admin easier in the process of selling goods.
              </p>
            )}
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
      <hr className="h-px my-10 flex bg-gray-200 border-0 dark:bg-gray-700 m-20" />
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
    </div>
  );
};

export default Portofolio;
