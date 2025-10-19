import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code2, Award, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/in/vineychhillar28", icon: Linkedin },
    { name: "GitHub", url: "https://github.com/ronaessi-28", icon: Github },
    { name: "LeetCode", url: "https://leetcode.com/u/Ronaessi_28/", icon: Code2 },
    { name: "HackerRank", url: "https://hackerrank.com/profile/ronaessi28chhil1", icon: Award },
  ];

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent animate-slide-up">
            Viney Chhillar
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground animate-slide-up delay-100">
            Full Stack Developer | Java & Python Programmer | Tech Innovator
          </p>

          {/* Intro paragraph */}
          <p className="text-lg mb-8 text-foreground/80 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200">
            I'm a B.Tech Computer Science student passionate about solving problems through code. 
            From secure backend systems to real-time web apps, I build scalable solutions using modern stacks 
            like MERN, Next.js, and Python. I also believe in continuous learning — backed by verifiable 
            certifications and real-world projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-up delay-300">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                <Code2 className="mr-2" />
                View Projects
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#certifications">
                <Award className="mr-2" />
                View Certifications
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 justify-center animate-slide-up delay-500">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-primary/50 rounded-lg hover:border-primary hover:bg-primary/10 transition-all group"
                >
                  <Icon className="w-5 h-5 text-primary group-hover:animate-glow" />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
