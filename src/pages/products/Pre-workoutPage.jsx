/* eslint-disable no-unused-vars */

import preWorkoutImg from "../../img/products/pre-workout/pre-workout-large.png";
import preWorkoutLabelImg from "../../img/products/pre-workout/details/pre-workout-label.png";
import preWorkoutSiteImg from "../../img/products/pre-workout/details/pre-workout-site.png";

import preWorkoutPinkImg from "../../img/products/pre-workout/pink-fruit/pre-workout-pink.png";
import preWorkoutPinkLabelImg from "../../img/products/pre-workout/pink-fruit/pre-workout-pink-label.png";
import preWorkoutPinkSiteImg from "../../img/products/pre-workout/pink-fruit/pre-workout-pink-site.png";

import nutritionImg from "../../img/nutrition-information/nutrition-information.png";

import { useState, useEffect } from "react";

const PreWorkoutPage = () => {
  const [flavour, setflavour] = useState("rasp");
  const [imgPerspective, setImgPerspective] = useState(
    flavour == "rasp" ? preWorkoutImg : preWorkoutPinkImg
  );
  useEffect(() => {
    setImgPerspective(flavour === "rasp" ? preWorkoutImg : preWorkoutPinkImg);
  }, [flavour]);
  const [section, setSection] = useState("desc");

  return (
    <>
      <section className="mt-[80px] py-12 font-primary sm:py-16">
        <div className="container mx-auto px-4">
          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-0">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2">
                  <div className="max-w-xl  overflow-hidden rounded-lg">
                    <img
                      className="h-full w-full max-w-full object-cover"
                      src={imgPerspective}
                      alt=""
                    />
                  </div>
                </div>

                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                  <div className="flex flex-row items-start lg:flex-col">
                    <button
                      type="button"
                      className={
                        imgPerspective == preWorkoutImg ||
                        imgPerspective == preWorkoutPinkImg
                          ? "mb-3 aspect-square h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center dark:border-white"
                          : "mb-3 aspect-square h-20 overflow-hidden rounded-lg text-center"
                      }
                      onClick={() => {
                        setImgPerspective(
                          flavour == "rasp" ? preWorkoutImg : preWorkoutPinkImg
                        );
                      }}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={
                          flavour == "rasp" ? preWorkoutImg : preWorkoutPinkImg
                        }
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      className={
                        imgPerspective == preWorkoutSiteImg ||
                        imgPerspective == preWorkoutPinkSiteImg
                          ? "mb-3 aspect-square h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center dark:border-white"
                          : "mb-3 aspect-square h-20 overflow-hidden rounded-lg text-center"
                      }
                      onClick={() => {
                        console.log(imgPerspective);
                        setImgPerspective(
                          flavour == "rasp"
                            ? preWorkoutSiteImg
                            : preWorkoutPinkSiteImg
                        );
                      }}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={
                          flavour == "rasp"
                            ? preWorkoutSiteImg
                            : preWorkoutPinkSiteImg
                        }
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      className={
                        imgPerspective == preWorkoutLabelImg ||
                        imgPerspective == preWorkoutPinkLabelImg
                          ? "mb-3 aspect-square h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center dark:border-white"
                          : "mb-3 aspect-square h-20 overflow-hidden rounded-lg text-center"
                      }
                      onClick={() => {
                        setImgPerspective(
                          flavour == "rasp"
                            ? preWorkoutLabelImg
                            : preWorkoutPinkLabelImg
                        );
                      }}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={
                          flavour == "rasp"
                            ? preWorkoutLabelImg
                            : preWorkoutPinkLabelImg
                        }
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="text-stroke font-special text-4xl text-yellow lg:text-5xl">
                Pre-Workout
              </h1>

              <div className="mt-5 flex items-center">
                <div className="flex items-center">
                  <svg
                    className="text-yellow-500 block h-4 w-4 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="orange"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="text-yellow-500 block h-4 w-4 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="orange"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="text-yellow-500 block h-4 w-4 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="orange"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="text-yellow-500 block h-4 w-4 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="orange"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                  <svg
                    className="text-yellow-500 block h-4 w-4 align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="orange"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <p className="ml-2 text-sm font-medium text-gray-500">
                  587 Reviews
                </p>
              </div>

              <h2 className="mt-8 text-base text-gray-900">Flavour</h2>
              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                <label className="group cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value="Powder"
                    className="peer sr-only"
                    onClick={() => {
                      setflavour("rasp");
                    }}
                    checked={flavour === "rasp"}
                  />
                  <p className="rounded-lg border border-primary px-6 py-2 font-bold text-primary peer-checked:bg-primary peer-checked:text-white">
                    Raspberry
                  </p>
                </label>
                <label className="group cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value="Ground"
                    className="peer sr-only"
                    onClick={() => {
                      setflavour("pink");
                    }}
                    checked={flavour === "pink"}
                  />
                  <p className="rounded-lg border border-fuchsia-400 px-6 py-2 font-bold text-fuchsia-400 peer-checked:bg-fuchsia-400 peer-checked:text-white">
                    Pink Fruit
                  </p>
                </label>
              </div>

              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-b border-t py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">19.99$</h1>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-primary bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out hover:bg-gray-800 focus:shadow dark:hover:animate-pulse dark:hover:bg-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 h-5 w-5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>

              <ul className="mt-8 space-y-2">
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      className=""
                    ></path>
                  </svg>
                  Free shipping worldwide
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="border-b border-gray-300">
                <nav className="flex gap-4">
                  <span
                    className={
                      section == "desc"
                        ? "cursor-pointer border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800 dark:border-white dark:text-white "
                        : "inline-flex cursor-pointer items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600 dark:text-white"
                    }
                    onClick={() => {
                      setSection("desc");
                    }}
                  >
                    Description
                  </span>

                  <span
                    className={
                      section == "desc"
                        ? "inline-flex cursor-pointer items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600 dark:text-white"
                        : "flex cursor-pointer border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800 dark:border-white dark:text-white"
                    }
                    onClick={() => {
                      setSection("reviews");
                    }}
                  >
                    Reviews
                    <span className="ml-2 block rounded-full bg-primary px-2 py-px text-xs font-bold text-gray-100">
                      587
                    </span>
                  </span>
                </nav>
              </div>
              {section == "desc" ? (
                <div className="mt-8 flow-root font-primary sm:mt-12">
                  <h1 className="text-3xl font-bold">Description</h1>
                  <p className="mt-4">
                    Elevate your workout performance to new heights with our
                    cutting-edge pre-workout formula. Designed to provide you
                    with an explosive burst of energy, enhanced focus, and
                    increased endurance, our pre-workout is the ultimate ally
                    for achieving your fitness goals. Unleash your potential and
                    conquer your workouts like never before!
                  </p>
                  <h1 className="mt-8 text-3xl font-bold">
                    How Pre-Workout Works:
                  </h1>
                  <p className="mt-4">
                    Our pre-workout leverages a synergistic blend of
                    scientifically researched ingredients to deliver
                    unparalleled results. The carefully selected components work
                    together to provide the following benefits:
                    <br />
                    <br />
                    1. Energy Boost: Experience a surge of energy that will
                    power you through even the most intense training sessions.
                    Our pre-workout combines caffeine, taurine, and beta-alanine
                    to enhance stamina and reduce fatigue, ensuring you can push
                    harder for longer.
                    <br />
                    <br />
                    2. Laser Focus: Achieve razor-sharp focus and mental clarity
                    to maximize your concentration during workouts. Key
                    ingredients such as L-theanine and tyrosine promote
                    cognitive function, allowing you to stay in the zone and
                    crush your fitness targets.
                    <br />
                    <br />
                    3. Endurance Enhancement: Train with increased endurance and
                    stamina. Our pre-workout contains ingredients like
                    citrulline malate and creatine monohydrate, which support
                    improved blood flow and delay the onset of muscle fatigue,
                    enabling you to go the extra mile.
                  </p>
                  <h1 className="mt-8 text-3xl font-bold">
                    Usage Instructions:
                  </h1>
                  <p className="mt-4">
                    To experience the full benefits of our pre-workout, simply
                    mix one scoop with 8-10 ounces of cold water and consume
                    approximately 20-30 minutes before your workout. For
                    individuals sensitive to stimulants, we recommend starting
                    with half a scoop to assess tolerance. Avoid taking it
                    within 4 hours of bedtime to prevent sleep disruption.
                  </p>
                  <br />
                  <br />
                  <img src={nutritionImg} alt="" className="w-full 2xl:w-1/3" />
                  <p>
                    These ingredients work in harmony to provide you with an
                    optimal pre-workout experience, igniting your energy levels,
                    improving focus, and maximizing your performance. <br />
                    <br />
                    Note: Consult with a healthcare professional before using
                    this product, especially if you have any pre-existing
                    medical conditions or are taking any medications. This
                    pre-workout is intended for healthy individuals aged 18 and
                    above. <br /> <br /> Prepare yourself for a workout like no
                    other. Unlock your true potential with our pre-workout and
                    dominate the gym!
                  </p>
                </div>
              ) : (
                <div className="mt-8 flow-root font-primary sm:mt-12">
                  <Review
                    person="John Doe"
                    content="This pre-workout gave me an incredible surge of energy."
                    date="15/06/2023"
                  />
                  <Review
                    person="Ava Max"
                    content="I love how this pre-workout enhanced my focus, allowing me to zone in on my training."
                    date="14/06/2023"
                  />
                  <Review
                    person="Jamal Noxvil"
                    content="I highly recommend this pre-workout to anyone looking to take their fitness journey to the next level."
                    date="13/06/2023"
                  />
                  <Review
                    person="Yeat Brown"
                    content="Top quality product!"
                    date="08/06/2023"
                  />
                  <div className="mx-auto mt-8 flex flex-row gap-0">
                    <button
                      type="button"
                      className="hover:bg-red-700 rounded-l-md border-r border-gray-100 bg-primary px-3 py-2 text-white transition-all duration-200 ease-in-out hover:bg-gray-800 focus:shadow dark:hover:animate-pulse dark:hover:bg-primary"
                    >
                      <div className="flex flex-row align-middle">
                        <svg
                          className="mr-2 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <p className="ml-2">Prev</p>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="hover:bg-red-700 rounded-r-md border-l border-gray-200 bg-primary px-3 py-2 text-white transition-all duration-200 ease-in-out hover:bg-gray-800 hover:text-white focus:shadow dark:hover:animate-pulse dark:hover:bg-primary"
                    >
                      <div className="flex flex-row align-middle">
                        <span className="mr-2">Next</span>
                        <svg
                          className="ml-2 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const Review = ({ person, content, date }) => {
  return (
    <div className="flex flex-col justify-between gap-2 border-b border-gray-300 py-8">
      <div className=" flex items-center ">
        <div className="flex items-center">
          <svg
            className="text-yellow-500 block h-4 w-4 align-middle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="orange"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              className=""
            ></path>
          </svg>
          <svg
            className="text-yellow-500 block h-4 w-4 align-middle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="orange"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              className=""
            ></path>
          </svg>
          <svg
            className="text-yellow-500 block h-4 w-4 align-middle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="orange"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              className=""
            ></path>
          </svg>
          <svg
            className="text-yellow-500 block h-4 w-4 align-middle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="orange"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              className=""
            ></path>
          </svg>
          <svg
            className="text-yellow-500 block h-4 w-4 align-middle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="orange"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              className=""
            ></path>
          </svg>
        </div>
        <p className="ml-2 text-sm font-medium text-gray-500">{person}</p>
        <p className="ml-2 text-sm font-medium text-gray-500">{date}</p>
      </div>
      <span className="flex items-center">{content}</span>
    </div>
  );
};

export default PreWorkoutPage;
