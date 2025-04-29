const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <span className="font-bold text-base text-amber-400 sm:text-lg md:text-xl">
                Frontend Developer
              </span>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                Hello, I'm Tracy
              </h1>
              <p className="mt-3 text-base text-gray-500 text-justify sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
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
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-amber-400 hover:bg-amber-500 md:py-4 md:text-lg md:px-10"
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
        <div className="h-full w-full">
          <svg
            viewBox="0 0 420 420"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <mask id="blob-mask">
                <path
                  fill="white"
                  d="M39.9,-63C52.2,-62.1,62.8,-52.2,65.9,-40.2C69,-28.2,64.6,-14.1,65.5,0.5C66.4,15.1,72.5,30.3,65.2,35C57.9,39.7,37.1,34.1,24,42.3C10.9,50.6,5.5,72.7,-3.5,78.8C-12.5,84.9,-25,74.9,-35.3,65C-45.7,55.2,-54,45.6,-58.6,34.8C-63.3,23.9,-64.5,12,-62.3,1.3C-60.1,-9.4,-54.5,-18.9,-49,-28.2C-43.5,-37.6,-37.9,-46.8,-29.8,-50.1C-21.6,-53.3,-10.8,-50.5,1.5,-53.2C13.9,-55.8,27.7,-63.9,39.9,-63Z"
                  transform="translate(200 200) scale(2.5)"
                />
              </mask>
              <clipPath id="blob-clip">
                <path
                  d="M39.9,-63C52.2,-62.1,62.8,-52.2,65.9,-40.2C69,-28.2,64.6,-14.1,65.5,0.5C66.4,15.1,72.5,30.3,65.2,35C57.9,39.7,37.1,34.1,24,42.3C10.9,50.6,5.5,72.7,-3.5,78.8C-12.5,84.9,-25,74.9,-35.3,65C-45.7,55.2,-54,45.6,-58.6,34.8C-63.3,23.9,-64.5,12,-62.3,1.3C-60.1,-9.4,-54.5,-18.9,-49,-28.2C-43.5,-37.6,-37.9,-46.8,-29.8,-50.1C-21.6,-53.3,-10.8,-50.5,1.5,-53.2C13.9,-55.8,27.7,-63.9,39.9,-63Z"
                  transform="translate(200 200) scale(2.5)"
                />
              </clipPath>
            </defs>
            <rect
              width="400"
              height="400"
              fill="#FBBF24"
              clip-path="url(#blob-clip)"
            />
            <image
              href="/Tracy.png"
              x="0"
              y="0"
              width="400"
              height="400"
              mask="url(#blob-mask)"
              className="object-cover"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
