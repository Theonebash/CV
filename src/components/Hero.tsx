import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50 animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
          Creative Developer
          <br />& Designer
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Crafting digital experiences that blend aesthetic excellence with cutting-edge technology
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="group">
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg">
            Get In Touch
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-glow" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-glow animation-delay-2000" />
    </section>
  );
};

export default Hero;
