const Projects = () => {
  const projects = [
    {
      title: "Memory Game",
      description:
        "The classic Memory Game, where a player needs to flip all the cards in a grid until they find all the matching pairs",
      tech: ["JavaScript", "HTML", "CSS"],
      image: "/Nemlingo.png",
      github: "https://github.com/tracytratran/memory-game",
      demo: "",
    },
    {
      title: "PrepHub",
      description:
        "Danish preparation hub that helps students prepare for Danish related exams (currently only supports active citizenship test)",
      tech: ["React", "TypeScript", "TailwindCSS"],
      image: "/PrepHub.png",
      github: "https://github.com/tracytratran/aktiv-medborgerskab",
      demo: "https://tracytratran.github.io/aktiv-medborgerskab/",
    },
    {
      title: "Linder",
      description: `A combination of LinkedIn and Tinder, aka Linder.<br/>
        This is also my final project for Javascript with React Course in Fall 2024 at REDI School of Digital Integration Denmark.`,
      tech: ["React", "JavaScript", "TailwindCSS"],
      image: "/Linder.png",
      github: "https://github.com/tracytratran/linder",
      demo: "",
    },
  ];

  return (
    <div id="projects" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Projects
          </h2>
          <div className="mt-4 h-1 w-16 bg-sky-800 mx-auto"></div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col bg-white p-6 rounded-lg shadow h-full"
              >
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-justify text-gray-800">
                    <div
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech) => {
                    const techLower = tech.toLowerCase();
                    let badgeUrl;

                    switch (techLower) {
                      case "react":
                        badgeUrl =
                          "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB";
                        break;
                      case "typescript":
                        badgeUrl =
                          "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white";
                        break;
                      case "tailwindcss":
                        badgeUrl =
                          "https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC";
                        break;
                      case "javascript":
                        badgeUrl =
                          "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black";
                        break;
                      case "html":
                        badgeUrl =
                          "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white";
                        break;
                      case "css":
                        badgeUrl =
                          "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white";
                        break;
                      default:
                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            {tech}
                          </span>
                        );
                    }

                    return (
                      <img
                        key={tech}
                        src={badgeUrl}
                        alt={tech}
                        className="h-6"
                      />
                    );
                  })}
                </div>
                <div className="flex flex-wrap gap-2 justify-center items-center mt-4 border border-transparent text-white text-sm text-center font-medium">
                  <a
                    href={project.demo || "#"}
                    className={`grow px-4 py-2 rounded-md ${
                      project.demo
                        ? "bg-sky-800 hover:bg-sky-700"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                    {...(project.demo
                      ? {}
                      : { "aria-disabled": true, tabIndex: -1 })}
                  >
                    View Demo
                  </a>
                  <a
                    href={project.github || "#"}
                    className={`grow px-4 py-2 rounded-md ${
                      project.github
                        ? "bg-black hover:bg-gray-600"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                    {...(project.github
                      ? {}
                      : { "aria-disabled": true, tabIndex: -1 })}
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Projects;
