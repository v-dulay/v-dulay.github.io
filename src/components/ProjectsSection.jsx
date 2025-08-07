import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  // {
  //   id: 1,
  //   title: "Project #1",
  //   description: "A beautiful landing page for my upcoming project 1",
  //   image: "/projects/project1.png",
  //   tags: ["React", "TailwindCSS", "Supabase"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 2,
  //   title: "Project #2",
  //   description: "A beautiful landing page for my upcoming project 2",
  //   image: "/projects/project2.png",
  //   tags: ["TypeScript", "D3.js", "Next.js"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 3,
  //   title: "Project #3",
  //   description: "A beautiful landing page for my upcoming project 3",
  //   image: "/projects/project3.png",
  //   tags: ["React", "Node.js", "Stripe"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  {
    id: 4,
    title: "RecoMed",
    description:
      "RecoMed is a web-based records management system for an OB-GYN clinic that I helped design and develop, featuring an integrated appointment queue and a user-friendly interface for both staff and patients.",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS", "Javascript", "PHP"],
    demoUrl:
      "https://docs.google.com/document/d/1bNQdnFR4stDQqaL63LNnCYMEEiT_H-EnuAidRWEkn18/edit?tab=t.0",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "AR.TE.CU",
    description:
      "AR.TE.CU is a Figma prototype that connects users with artists for custom product designs—like phone cases or headphones—while using artificial intelligence to visualize the artwork on the item in real time before confirming the commission.",
    image: "/projects/project5.png",
    tags: ["Figma"],
    demoUrl:
      "https://www.figma.com/proto/MjmAtXbcv12aON44AgbnrG/AR.TE.CU-High-fidelity-Wireframes?node-id=84-780&starting-point-node-id=84%3A780",
    githubUrl: "#",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                    {/* <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/v-dulay"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div> */}
      </div>
    </section>
  );
};
