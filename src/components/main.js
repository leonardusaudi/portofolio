import React, { useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const boxVariant1 = {
  hidden: { opacity: 0, x: "100vw" },
  visible: { opacity: 1, x: 0 },
};

const Main = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  useEffect(() => {
    if (inView1) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView1]);

  return (
    <div id="main">
      <div className="flex w-full p-20">
        <div className="h-full w-full flex flex-col justify-end pb-4 lg:pb-0 lg:justify-center">
          <div className="h-1/2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
            <div className="flex justify-between">
              <motion.div
                className="mt-28 lg:ml-28 lg:w-96 sm:justify-center sm:ml-14 sm:mr-10"
                initial="hidden"
                animate={control}
                ref={ref}
                variants={boxVariant}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <h1 className="text-4xl lg:text-5xl font-medium text-gray-600 pb-5">
                  Hi! This is Leo
                </h1>
                <p className="text-gray-500 text-xs lg:text-base leading-5 mb-7">
                  I actively participate in fulfilling client needs for
                  application requests that in addition to simplifying the
                  client's company operations, also have an attractive
                  appearance and are easy for users to use.
                </p>
                <Link
                  className="cursor-pointer"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl hover:scale-110 ease-in duration-200 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Go to next
                  </button>
                </Link>
              </motion.div>
              <motion.div
                className="hidden lg:flex"
                initial="hidden"
                animate={control}
                ref={ref1}
                variants={boxVariant1}
                transition={{
                  type: "linear",
                  duration: 1,
                }}
              >
                <Image
                  src="/image-mockups.png"
                  className="object-contains mt-10 ml-32 hidden lg:flex"
                  width={400}
                  height={200}
                  alt=""
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="flex justify-center font-medium text-gray-600">
        Cooperate with companies :
      </h2>
      <div className="flex items-center justify-center">
        <Image
          src="/1.jpg"
          className="object-contains mt-3 mr-10"
          alt="Picture of the author"
          width={100}
          height={200}
        />
        <Image
          src="/Accenture.png"
          className="object-contains ml-10"
          alt="Picture of the author"
          width={100}
          height={50}
        />
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
    </div>
  );
};

export default Main;
