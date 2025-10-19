import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  location?: string;
  responsibilities: string[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    title: "Python Development Intern",
    company: "Zaalima Development",
    period: "Mar 2025 – Jun 2025",
    responsibilities: [
      "Contributed to backend module optimization in Python-based projects",
      "Collaborated with the team on real-world debugging and version control",
      "Improved feature performance and documented production workflows",
    ],
    tags: ["Python", "Backend", "Git", "Optimization"],
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience building real-world solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow-cyan animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-foreground/80 mt-1">
                          <a 
                            href="https://www.zaalima.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors hover:underline"
                          >
                            {exp.company}
                          </a>
                        </CardDescription>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mt-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        {exp.period}
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          {exp.location}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-primary">Key Contributions:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <span className="text-primary mr-3 mt-1">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-primary">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
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

export default WorkExperience;
