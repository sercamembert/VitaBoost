/* eslint-disable no-unused-vars */
import proteinImg from "../../img/products/protein/protein-large.png";
import proteinLabelImg from "../../img/products/protein/details/protein-label.png";
import { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { SidebarContext } from "../../contexts/SidebarContext";
const ProteinPage = () => {
  const [imgPerspective, setImgPerspective] = useState(proteinImg);
  const [section, setSection] = useState("desc");

  const { handleAddToCart } = useContext(CartContext);
  const { handleToggleCart } = useContext(SidebarContext);

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
                      alt="Legal Limit Labs Micronized protein Monohydrate is ourraw, unflavored protein monohydrate formula."
                    />
                  </div>
                </div>

                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                  <div className="flex flex-row items-start lg:flex-col">
                    <button
                      type="button"
                      className={
                        imgPerspective == proteinImg
                          ? "mb-3 aspect-square h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center dark:border-white"
                          : "mb-3 aspect-square h-20 overflow-hidden rounded-lg text-center"
                      }
                      onClick={() => {
                        setImgPerspective(proteinImg);
                      }}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={proteinImg}
                        alt="protein is the most extensively researched and effective supplement available today."
                      />
                    </button>
                    <button
                      type="button"
                      className={
                        imgPerspective == proteinLabelImg
                          ? "mb-3 aspect-square h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center dark:border-white"
                          : "mb-3 aspect-square h-20 overflow-hidden rounded-lg text-center"
                      }
                      onClick={() => {
                        setImgPerspective(proteinLabelImg);
                      }}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={proteinLabelImg}
                        alt="protein is the most extensively researched and effective supplement available today."
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="text-stroke font-special text-4xl text-red lg:text-5xl">
                Protein
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
                  456 Reviews
                </p>
              </div>

              <h2 className="mt-8 text-base text-gray-900">Flavour</h2>
              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value="Powder"
                    className="sr-only"
                  />
                  <p className="rounded-lg border border-red bg-red px-6 py-2 font-bold text-white">
                    Strawberry
                  </p>
                </label>
              </div>

              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-b border-t py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">24.99$</h1>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-primary bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out hover:bg-gray-800 focus:shadow dark:hover:animate-pulse dark:hover:bg-primary"
                  onClick={() => {
                    handleToggleCart();
                    handleAddToCart({
                      name: "Pure Whey",
                      price: "24.99$",
                      flavour: "Strawberry",
                      qty: 1,
                      img: proteinImg,
                      link: "/protein",
                    });
                  }}
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
                      456
                    </span>
                  </span>
                </nav>
              </div>
              {section == "desc" ? (
                <div className="mt-8 flow-root font-primary sm:mt-12">
                  <h1 className="mt-4 text-3xl font-bold">
                    VitaBoost 100% Pure Whey
                  </h1>
                  <p className="mt-4">
                    The highest-quality protein supplement based on whey protein
                    concentrate and isolate (WPC + WPI)! The formula is free
                    from plant fractions and other unnecessary additives. By
                    choosing this supplement, you can be confident in its
                    complete nutritional composition. It aids in properly
                    balancing your diet. It is worth emphasizing that an
                    adequate protein intake is essential for efficient
                    post-workout recovery and the development of lean muscle
                    tissue. Reach for the best!
                  </p>
                  <p className="mt-4">
                    BioTech 100% Pure Whey - a world-class product based
                    entirely on whey protein concentrate and isolate (WPC +
                    WPI). It is characterized by high nutritional and biological
                    value, reflected in its amino acid profile. It guarantees
                    the supply of all essential amino acids to the muscles.
                    Adequate intake of building blocks ensures efficient
                    post-workout recovery and improvement in results, such as
                    the growth of lean muscle tissue. The manufacturer has even
                    taken care of excellent taste and easy solubility in every
                    serving. It is worth noting that each serving is also a rich
                    source of BCAAs and EAAs with strong anti-catabolic
                    properties.
                  </p>
                  <h1 className="mt-4 text-3xl font-bold">
                    Usage Instructions:
                  </h1>
                  <p className="mt-4">
                    Mix 1 serving (28g = approximately 2 heaping tablespoons) of
                    100% Pure Whey with 250ml of water, preferably using a
                    shaker. <br /> On training days, consume 2 servings,
                    including one serving within 45 minutes after your workout
                    and the second serving between meals. <br /> On non-training
                    days, consume 1 serving in the morning and 1 serving in the
                    evening.
                  </p>
                  <h1 className="mt-4 text-3xl font-bold">
                    Nutrition Information:
                  </h1>
                  <img
                    src={proteinLabelImg}
                    alt="nutrition info"
                    className="mt-4"
                  />
                </div>
              ) : (
                <div className="mt-8 flow-root font-primary sm:mt-12">
                  <Review
                    person="John Doe"
                    content="This protein gave me an incredible surge of energy."
                    date="15/06/2023"
                  />
                  <Review
                    person="Ava Max"
                    content="I love how this protein enhanced my focus, allowing me to zone in on my training."
                    date="14/06/2023"
                  />
                  <Review
                    person="Jamal Noxvil"
                    content="I highly recommend this protein to anyone looking to take their fitness journey to the next level."
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

export default ProteinPage;
