import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Developer of Seamless Interfaces & Digital Systems
            </h3>

            <p className="text-muted-foreground">
              I specialize in building responsive, user-centered web
              applications using HTML5, CSS3, JavaScript, and React. My work
              spans landing pages, internal dashboards, and modular interfaces,
              all designed with usability and performance in mind. I’ve also
              contributed to QA efforts on live production systems, conducting
              scenario-based testing and identifying UI/UX bugs that improved
              development cycles. My approach is detail-oriented and driven by a
              strong sense of design logic and clean code architecture.
            </p>
            <p className="text-muted-foreground">
              Beyond the frontend, I have experience with backend development
              using Node.js and PHP, and I’m comfortable working with databases
              like MySQL and PostgreSQL. I’ve built full-stack apps, integrated
              REST APIs, and maintained WordPress-based content systems,
              including custom plugin and theme work. My background includes a
              full-stack bootcamp, a degree in Information Technology from Saint
              Louis University, and hands-on roles where I balanced development
              with testing and automation tasks. I take pride in creating
              reliable digital systems that function smoothly and scale with
              purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                target="_blank"
                href="DULAY, Vince Karlo-Resume-Web Developer.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    I develop responsive and user-focused websites using HTML,
                    CSS, JavaScript, and React, with attention to clean code,
                    performance, and cross-device compatibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    I design intuitive, user-centered interfaces with a focus on
                    layout structure, responsiveness, and seamless interaction
                    using tools like Figma and modern CSS frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    I manage projects using tools like Trello and Google Sheets
                    to organize tasks, track progress, and ensure smooth
                    collaboration across development cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
