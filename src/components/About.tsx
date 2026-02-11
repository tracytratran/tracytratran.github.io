const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <span className="font-bold text-base text-sky-800 sm:text-lg md:text-xl">
                Frontend Developer
              </span>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                Hello, I'm Tracy
              </h1>
              <p className="mt-3 text-base text-gray-800 text-justify sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A budding Frontend Developer with a passion for problem-solving.
                Eager to learn, both solution-oriented and detail-oriented, and
                dedicated to my craft. Committed to expanding my skills and
                creating user-friendly applications.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://www.linkedin.com/in/tracytratran/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-sky-800 hover:bg-sky-700 md:py-4 md:text-lg md:px-10"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-full w-full flex items-center justify-center p-4">
          <img
            src="/Tracy.png"
            alt="Tracy Tran"
            className="h-auto w-auto max-h-[80%] max-w-[80%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
