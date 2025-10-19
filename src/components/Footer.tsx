import { Github, Linkedin, Code2, Award, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/in/vineychhillar28", icon: Linkedin },
    { name: "GitHub", url: "https://github.com/ronaessi-28", icon: Github },
    { name: "LeetCode", url: "https://leetcode.com/u/Ronaessi_28/", icon: Code2 },
    { name: "HackerRank", url: "https://hackerrank.com/profile/ronaessi28chhil1", icon: Award },
  ];

  return (
    <footer className="border-t border-primary/20 bg-card/30">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {currentYear} Viney Chhillar. Built with <Heart className="w-4 h-4 text-primary animate-pulse" /> and code.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-primary/30 rounded-lg hover:border-primary hover:bg-primary/10 transition-all group"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5 text-primary group-hover:animate-glow" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
