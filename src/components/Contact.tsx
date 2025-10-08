import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socials = [
    { icon: Github, label: "GitHub", url: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com" },
  ];

  return (
    <section className="py-32 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <Button variant="hero" size="lg" className="mb-16" asChild>
            <a href="mailto:hello@example.com">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </Button>

          <div className="flex justify-center gap-6">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
