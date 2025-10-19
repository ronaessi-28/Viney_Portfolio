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
    link: "https://drive.google.com/file/d/1mCNE4Q2iVdWnjL7vxbX3RvJtdBf-pw0M/view?usp=sharing",
    category: "Development",
  },
  {
    title: "Certified in SQL (Basic)",
    issuer: "HackerRank",
    link: "https://drive.google.com/file/d/1jfOsTGKpLhshTF3LNPwLy4Je6uiqKKQs/view?usp=drive_link",
    category: "Database",
  },
  {
    title: "Certified in SQL (Intermediate)",
    issuer: "HackerRank",
    link: "https://drive.google.com/file/d/1zWydPEbe5nmvZUFR1E14xpR0Vm5zDTTF/view?usp=drive_link",
    category: "Database",
  },
  {
    title: "Certified in SQL (Advanced)",
    issuer: "HackerRank",
    link: "https://drive.google.com/file/d/1V6xbs5TqWgKlpnE2WGRj4HKt7x7KN5--/view?usp=drive_link",
    category: "Database",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    link: "https://drive.google.com/file/d/1mCNE4Q2iVdWnjL7vxbX3RvJtdBf-pw0M/view?usp=drive_link",
    category: "Development",
  },
  {
    title: "Oracle Academy – Java Foundation",
    issuer: "Oracle Academy",
    link: "https://drive.google.com/file/d/1kjEcZb82pBrmTAhJYcJNo4GIFTbUZOBL/view?usp=drive_link",
    category: "Programming",
  },
  {
    title: "Oracle Academy – Java Fundamentals",
    issuer: "Oracle Academy",
    link: "https://drive.google.com/file/d/1_P5rwlj2Ac7M4y_lAPLvfD1JclS7kOy1/view?usp=drive_link",
    category: "Programming",
  },
  {
    title: "Oracle Academy – Java Programming",
    issuer: "Oracle Academy",
    link: "https://drive.google.com/file/d/1_AG86w47Cj7-zrstJyFZLabUTPnZW6NY/view?usp=drive_link",
    category: "Programming",
  },
  {
    title: "Oracle Academy – Database Foundation",
    issuer: "Oracle Academy",
    link: "https://drive.google.com/file/d/1sPX-3XFVk50gVc7e8eDb4MV14ZqJlml8/view?usp=drive_link",
    category: "Database",
  },
  {
    title: "Oracle Academy – Database Programming with SQL",
    issuer: "Oracle Academy",
    link: "https://drive.google.com/file/d/1nfdtMIgfDgUC9BCHqF8IRUF8h3X3OuhC/view?usp=drive_link",
    category: "Database",
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "AWS Academy",
    link: "https://drive.google.com/file/d/14hFqWPgziqEUndfyd5aNCYkNqai-v5WE/view?usp=drive_link",
    category: "Cloud",
  },
  {
    title: "Flipkart GRiD 6.0 – SDE Track",
    issuer: "Flipkart",
    link: "https://drive.google.com/file/d/1reXQCxmYyK9UkfTdQy8cGxa_TsrSNLMN/view?usp=drive_link",
    category: "Competition",
  },
  {
    title: "Introduction to Scripting in C# with Unity",
    issuer: "TechXR Innovations",
    link: "https://drive.google.com/file/d/19-e6cJOfZ7ZGQdroaSIX0cv_yo_5sl2u/view?usp=drive_link",
    category: "Development",
  },
  {
    title: "TVS Credit EPIC 6.0 - IT Track",
    issuer: "TVS Credit",
    link: "https://drive.google.com/file/d/11re8VRHIkLPWoTDs0wBTxN2lmDNVHanF/view?usp=drive_link",
    category: "Competition",
  },
  {
    title: "Treasure Hunt of Rebel Foods' EatSure Cloud 2024",
    issuer: "Rebel Foods",
    link: "https://drive.google.com/file/d/1gDwXx6oBZTD00XdkGQd6F9SKfAEUvlyA/view?usp=drive_link",
    category: "Competition",
  },
  {
    title: "Tata Imagination Challenge 2024: Student Track",
    issuer: "Tata Group",
    link: "https://drive.google.com/file/d/1Wow5SERAWyKUTYDRvbVRVBLn5LLUrgOx/view?usp=drive_link",
    category: "Competition",
  },
  {
    title: "TATA Crucible Campus Quiz 2024",
    issuer: "Tata Group",
    link: "https://drive.google.com/file/d/1G88vOnqltt9W67Xxnbz2obnrz1yuNAMH/view?usp=drive_link",
    category: "Competition",
  },
  {
    title: "Rebel Foods' EatSure Cloud 2024",
    issuer: "Rebel Foods",
    link: "https://drive.google.com/file/d/1853mgxVYZR3BayHOTMJCERtonE0vHSH8/view?usp=drive_link",
    category: "Competition",
  },
  {
    title: "Round 1: The Mind Maze of Nestlé Leaders League Genesis",
    issuer: "Nestlé Leaders League Genesis",
    link: "https://drive.google.com/file/d/13X-bnedUBoM1rnC7PqYwjByjrVTGwxYA/view?usp=drive_link",
    category: "Competition",
  },
  {
    title: "Treasure Hunt of the Eurogrip TORQ Challenge 3.0",
    issuer: "Eurogrip",
    link: "https://drive.google.com/file/d/1gJbY-xzKXp_FmRZ8GNQME5WbYHi1HZV-/view?usp=drive_link",
    category: "Competition",
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
