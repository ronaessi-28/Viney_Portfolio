import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send form data to WhatsApp
      const message = `New Portfolio Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/919050337347?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ronaessi28chhillar@gmail.com",
      link: "mailto:ronaessi28chhillar@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9050337347",
      link: "tel:+919050337347",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "vineychhillar28",
      link: "https://linkedin.com/in/vineychhillar28",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "ronaessi-28",
      link: "https://github.com/ronaessi-28",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-card border-primary/20 animate-slide-up">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you soon</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up delay-200">
            <Card className="bg-card border-primary/20">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 border border-primary/20 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group"
                    >
                      <Icon className="w-6 h-6 text-primary group-hover:animate-glow flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">{info.label}</p>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary border-primary/30">
              <CardContent className="pt-6">
                <p className="text-center text-lg font-medium mb-4">
                  Let's build something amazing together!
                </p>
                <p className="text-center text-sm text-muted-foreground">
                  Open to freelance opportunities, collaborations, and full-time positions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
