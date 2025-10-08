import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2025 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
