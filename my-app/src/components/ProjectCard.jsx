const projects = [
    {
      title: "Spot On App",
      description:
        "An event curation app built with React Native, Firebase, and PostgreSQL. Includes real-time messaging, location tracking, and user authentication. Designed to help students discover local events and build community.",
      image: "https://placekitten.com/400/200",
      link: "https://github.com/your-spot-on-repo",
    },
    {
        title: "React Exercise App",
        description:
          "Tracks your sets and time for activities such as running, situps, swimming and pushups.",
        image: "https://placekitten.com/400/200",
        link: "https://github.com/your-spot-on-repo",
      },
      {
        title: "myUCF Mobile App",
        description:
        "Redesigned the myUCF mobile app to enhance usability and accessibility. Led user research, wireframing, and prototyping in Figma, resulting in a successfully deployed solution now used by students across the University of Central Florida.",
        image: "https://placekitten.com/400/200",
        link: "https://github.com/your-spot-on-repo",
      }
  ];
  
  const ProjectCard = () => {
    return (
      <>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col gap-4 border border-gray-200 hover:border-blue-400"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl h-40 w-full object-cover group-hover:scale-[1.02] transition-transform"
              />
            )}
            <div className="flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 flex-1">{project.description}</p>
            </div>
            <div className="mt-2">
              <span className="text-blue-500 font-medium group-hover:underline">
                View Project →
              </span>
            </div>
          </a>
        ))}
      </>
    );
  };
  
  export default ProjectCard;
  