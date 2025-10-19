import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  link: string;
  category: string;
}

const certifications: Certification[] = [
  {
    title: "The Complete Android S+ Java Developer",
    issuer: "Udemy",
    link: "#",
    category: "Mobile Development",
  },
  {
    title: "Certified in SQL (Intermediate)",
    issuer: "HackerRank / Oracle",
    link: "#",
    category: "Database",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    link: "#",
    category: "Web Development",
  },
  {
    title: "Oracle Academy – Java Foundation",
    issuer: "Oracle Academy",
    link: "#",
    category: "Programming",
  },
  {
    title: "Oracle Academy – Database Programming with SQL",
    issuer: "Oracle Academy",
    link: "#",
    category: "Database",
  },
  {
    title: "Oracle Academy – Database Foundation",
    issuer: "Oracle Academy",
    link: "#",
    category: "Database",
  },
  {
    title: "AWS Academy Graduate",
    issuer: "AWS Academy",
    link: "#",
    category: "Cloud Computing",
  },
  {
    title: "Flipkart GRiD 6.0 – SDE Track",
    issuer: "Flipkart",
    link: "#",
    category: "Competitive Programming",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verified credentials demonstrating expertise across various technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow-cyan group animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Award className="w-8 h-8 text-primary group-hover:animate-glow mb-3" />
                  <Badge variant="outline" className="text-xs">
                    {cert.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-4 h-4" />
                    View Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
