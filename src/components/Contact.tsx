
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const contactInfo = [
    { 
      icon: <Mail className="h-6 w-6" />, 
      label: "Email", 
      value: "rohitgilaaa@gmail.com",
      link: "mailto:rohitgilaaa@gmail.com"
    },
    { 
      icon: <Phone className="h-6 w-6" />, 
      label: "Phone", 
      value: "+91-8764191867",
      link: "tel:+918764191867"
    },
    { 
      icon: <Linkedin className="h-6 w-6" />, 
      label: "LinkedIn", 
      value: "linkedin.com/in/rohitgila",
      link: "https://linkedin.com/in/rohitgila/"
    },
    { 
      icon: <Github className="h-6 w-6" />, 
      label: "GitHub", 
      value: "github.com/rohitgila",
      link: "https://github.com/rohitgila"
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="bg-theme-blue hover:bg-theme-dark-blue">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a 
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-theme-light-blue text-theme-blue">
                        {info.icon}
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium">{info.label}</p>
                        <p className="text-sm text-gray-600">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-theme-blue text-white">
              <CardContent className="pt-6">
                <p className="text-center mb-4">Thank you for visiting my portfolio!</p>
                <p className="text-center text-sm opacity-90">
                  I'm currently open to new opportunities and collaborations.
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
