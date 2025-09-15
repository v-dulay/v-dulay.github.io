import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "RecoMed",
    description:
      "RecoMed is a web-based records management system for an OB-GYN clinic that I helped design and develop, featuring an integrated appointment queue and a user-friendly interface for both staff and patients.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "Javascript", "PHP"],
    demoUrl:
      "https://drive.google.com/file/d/1b7vvdTD5xzv8ntbgsac3zsHHa_n0nkI2/view?usp=sharing",
  },
  {
    id: 2,
    title: "AR.TE.CU",
    description:
      "AR.TE.CU is a Figma prototype that connects users with artists for custom product designs—like phone cases or headphones—while using artificial intelligence to visualize the artwork on the item in real time before confirming the commission.",
    image: "/projects/project2.png",
    tags: ["Figma"],
    demoUrl:
      "https://www.figma.com/proto/MjmAtXbcv12aON44AgbnrG/AR.TE.CU-High-fidelity-Wireframes?node-id=84-780&starting-point-node-id=84%3A780",
  },
  {
    id: 3,
    title: "Vince's Movie Catalog",
    description:
      "Vince’s Movie Catalog makes it simple to discover, explore, and track the movies you’ll love. With a modern, cinematic design, it offers quick search, smart categories, and a smooth browsing experience—helping you find your next favorite film effortlessly.",
    image: "/projects/project3.png",
    tags: [
      "Node.js",
      "React.js",
      "Vite",
      "TailwindCSS",
      "Appwrite",
      "TMDB API",
    ],
    demoUrl: "https://vince-movie-catalog.vercel.app",
    githubUrl: "https://github.com/v-dulay/vince-movie-catalog",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafter with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/v-dulay"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
