import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Trophy, Award, Users } from "lucide-react";

interface Stat {
  icon: typeof Code2;
  value: number;
  label: string;
  suffix: string;
  link?: string;
}

const stats: Stat[] = [
  {
    icon: Code2,
    value: 300,
    label: "LeetCode Problems",
    suffix: "+",
    link: "https://leetcode.com/u/Ronaessi_28/",
  },
  {
    icon: Trophy,
    value: 110,
    label: "HackerRank Solutions",
    suffix: "+",
    link: "https://hackerrank.com/profile/ronaessi28chhil1",
  },
  {
    icon: Award,
    value: 20,
    label: "Certifications",
    suffix: "+",
    link: "https://drive.google.com/drive/folders/18EEpo6z3Us6aklFrU-ikhOGIGzHUNhzw?usp=drive_link",
  },
  {
    icon: Users,
    value: 4,
    label: "Major Projects",
    suffix: "",
    link: "#projects",
  },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-5xl md:text-6xl font-bold bg-gradient-accent bg-clip-text text-transparent animate-counter">
      {count}{suffix}
    </span>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Coding Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Consistent problem-solving across multiple platforms
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const content = (
              <Card 
                className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow-cyan text-center group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:animate-glow" />
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <p className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            );

            if (stat.link) {
              return (
                <a 
                  key={index}
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return <div key={index}>{content}</div>;
          })}
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <div className="inline-block p-6 border border-primary/30 rounded-lg bg-card/50">
            <h3 className="text-xl font-semibold mb-2">Notable Highlights</h3>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                Participated in Smart India Hackathon & Flipkart GRiD 6.0
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                Created real-time apps blending security, streaming, and AI-based interactivity
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                Mentored students in Python, DSA, and full-stack fundamentals
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
