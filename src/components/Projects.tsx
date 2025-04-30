const Projects = () => {
  const projects = [
    {
      title: "PrepHub",
      description:
        "Danish preparation hub that helps students prepare for Danish related exams (currently only supports active citizenship test)",
      tech: ["React", "TypeScript", "TailwindCSS"],
      image: "/PrepHub.png",
      link: "https://tracytratran.github.io/aktiv-medborgerskab/",
    },
    {
      title: "Linder",
      description: `A combination of LinkedIn and Tinder, aka Linder.<br/>
        This is also my final project for Javascript with React Course in Fall 2024 at REDI School of Digital Integration Denmark.`,
      tech: ["React", "JavaScript", "TailwindCSS"],
      image: "/Linder.png",
      link: "https://github.com/tracytratran/linder",
    },
  ];

  return (
    <div id="projects" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Projects
          </h2>
          <div className="mt-4 h-1 w-16 bg-amber-400 mx-auto"></div>
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
                  <h3 className="text-lg font-medium text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-justify text-gray-500">
                    <div
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-amber-400 hover:bg-amber-500"
                >
                  View Project
                </a>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Projects;
