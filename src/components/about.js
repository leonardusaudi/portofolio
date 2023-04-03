import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const boxVariant1 = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: { opacity: 1, x: 0 },
};

const About = () => {
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
    <div id="about">
      <h2 className="flex justify-center text-3xl text-gray-600 dark:text-white">
        About
      </h2>
      <hr className="h-px my-10 flex bg-gray-200 border-0 dark:bg-gray-700 m-20" />
      <div className="lg:flex lg:justify-between mr-24 ml-24 mt-16 max-sm:justify-center">
      <motion.div
                initial="hidden"
                animate={control}
                ref={ref1}
                variants={boxVariant1}
                transition={{
                  type: "linear",
                  duration: 1
                }}
              >
        <div className="flex flex-wrap">
          <Image
            src="/profile.jpeg"
            className="lg:h-auto lg:w-60 sm:h-72 sm:w-52 sm:ml-28 max-sm:ml-2 max-sm:h-72 max-sm:w-52 max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
            alt=""
            width={200}
            height={200}
          />
        </div>
        </motion.div>
        <motion.div
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
          <div className="lg:ml-20 mt-7">
            <p className="text-gray-600 mb-10">
              I have been working as a Front-end Developer for 10 months at PT.
              Bakti Nusantara Innovation handles 2 applications, namely web
              (Laravel) and android (Flutter).
            </p>
            <p className="text-gray-600 mb-10">
              I have worked on 3 projects, namely Putter (Android) for the golf
              athlete community, and Tanjidor Ecommerce Webmin (Web) for admins
              and Tanjidor Ecommerce (Android) for customers.
            </p>
            <p className="text-gray-600 mb-10">
              I am proficient in C++, MySQL, Python, Flutter, HTML, CSS, PHP,
              Javascript and Laravel. I can solve problems, adapt easily,
              communicate well, can work individually or in a team, disciplined,
              diligent and thorough, fast in learning.
            </p>
          </div>
        </motion.div>
      </div>
      <hr className="h-px my-10 flex bg-gray-200 border-0 dark:bg-gray-700 m-20" />
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
    </div>
  );
};

export default About;
