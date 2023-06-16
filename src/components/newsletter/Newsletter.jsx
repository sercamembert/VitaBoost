const Newsletter = () => {
  return (
    <section className="bg-white p-6 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-6 lg:py-3 ">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl md:mb-12">
            Would you like to stay up to date with the latest health information
            and receive exclusive offers on our high-quality supplements? Sign
            up for VitaBost newsletter now!
          </p>
          <form action="#">
            <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:rounded-none sm:rounded-l-lg"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <button className="w-full cursor-pointer rounded-lg border bg-primary px-5 py-3 text-center text-sm font-medium text-white hover:animate-pulse sm:rounded-none sm:rounded-r-lg">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="newsletter-form-footer mx-auto max-w-screen-sm text-left text-sm text-gray-500 dark:text-gray-300">
              We care about the protection of your data.{" "}
              <a
                href="privacy"
                className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
              >
                Read our Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
