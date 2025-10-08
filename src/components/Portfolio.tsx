import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Modern Web Platform",
      description: "A cutting-edge web application with stunning visuals and smooth interactions",
      image: project1,
      tags: ["React", "TypeScript", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Mobile App Design",
      description: "Sleek mobile interface design with intuitive user experience",
      image: project2,
      tags: ["UI/UX", "Mobile", "Figma"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Brand Identity",
      description: "Complete brand identity system with logo and visual guidelines",
      image: project3,
      tags: ["Branding", "Design", "Identity"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section className="py-32 px-4 bg-muted/30" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
