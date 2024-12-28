"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🎓 Expert IGCSE & IB Tutoring
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Transform Your Learning Journey with Expert Tutors Worldwide
              </h1>
              <p className="mb-8 text-base font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                Personalized 1-on-1 Learning tailored to your academic goals. Learn from experienced educators with flexible online sessions at your own pace.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="flex items-center justify-center rounded-lg bg-orange px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-blue">
                  Book a Trial Lesson
                </button>
                <button className="flex items-center justify-center rounded-lg border border-orange bg-transparent px-6 py-3 text-base font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-orange hover:text-white">
                  View Our Subjects
                </button>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
