
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TATA Motors Sales Analysis",
      description: "Conducted in-depth sales trend analysis to identify patterns and key performance insights. Executed data cleaning and preprocessing using Pandas and NumPy, ensuring accuracy. Designed visualizations using bar and scatter plots to illustrate sales trends.",
      date: "Jan 2025",
      technologies: ["Python", "Pandas", "NumPy", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=400",
    },
    {
      title: "IPL 2024 Auction Analysis Dashboard",
      description: "Developed a dynamic Tableau dashboard to visualize team spending and player selections. Applied data preprocessing and filtering techniques to highlight player categories. Optimized price-performance analysis to support strategic team decision-making.",
      date: "Dec 2024",
      technologies: ["Tableau", "Data Analysis", "Dashboard Design"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&w=400",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-xl text-theme-blue">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-gray-500">{project.date}</Badge>
                </div>
                <CardDescription className="text-gray-700">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-theme-light-blue text-theme-blue">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-theme-blue hover:text-theme-dark-blue hover:bg-theme-light-blue p-0">
                  <span className="flex items-center">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
