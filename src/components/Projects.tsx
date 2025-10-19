import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  tech: string[];
  highlights: string[];
  category: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "End-to-End Encrypted Cryptography-Based Real-Time Chat",
    description: "LAN-based encrypted chat system ensuring secure offline communication with RSA encryption and multi-threading support.",
    date: "Jan 2023",
    tech: ["Python", "Socket Programming", "RSA", "Multithreading"],
    highlights: [
      "RSA encryption for message confidentiality and authentication",
      "Multi-threaded server supporting 300+ clients",
      "Secure offline communication over LAN",
    ],
    category: "Backend",
    github: "#",
  },
  {
    id: 2,
    title: "TuneTalk: Fusion of Music & Real-Time Communication",
    description: "Music streaming platform with integrated voice chat rooms built using the MERN stack and WebRTC.",
    date: "Apr 2024",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "WebRTC"],
    highlights: [
      "Music streaming with real-time voice chat integration",
      "WebRTC for peer-to-peer audio communication",
      "Secure, responsive, and performance-optimized",
    ],
    category: "Full Stack",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Secure File Sharing System",
    description: "Role-based encrypted file transfer system with REST APIs for secure file management.",
    date: "Sept 2024",
    tech: ["Python", "Flask", "SQL", "REST API"],
    highlights: [
      "Role-based access control (Ops & Client users)",
      "REST APIs for upload/download with URL-based access",
      "File encryption for data integrity and privacy",
    ],
    category: "Backend",
    github: "#",
  },
  {
    id: 4,
    title: "Pick-a-Number Real-Time Game",
    description: "Multiplayer game using Firebase Realtime Database for instant player state synchronization.",
    date: "Apr 2025",
    tech: ["Firebase", "JavaScript", "Vite"],
    highlights: [
      "Real-time multiplayer gameplay",
      "Firebase Realtime Database for state management",
      "Mobile-friendly with shareable game room links",
    ],
    category: "Frontend",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing full-stack development, security, and real-time communication
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow-cyan animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Tech Stack */}
                  <div>
                    <p className="text-sm font-semibold mb-2 text-primary">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <p className="text-sm font-semibold mb-2 text-primary">Key Highlights:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">▸</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 w-4 h-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="default" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
