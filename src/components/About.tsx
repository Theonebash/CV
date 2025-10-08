import { Code2, Palette, Sparkles } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Development",
      description: "Building responsive and performant web applications with modern technologies",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful and intuitive user interfaces that users love",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Pushing boundaries with creative solutions and cutting-edge approaches",
    },
  ];

  return (
    <section className="py-32 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer and designer focused on creating exceptional digital experiences.
            With a keen eye for detail and a love for clean code, I bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="group bg-gradient-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
