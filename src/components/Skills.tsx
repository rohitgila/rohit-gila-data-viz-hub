
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "C++", "R"]
    },
    {
      category: "Tools & Platforms",
      skills: ["MS Excel", "Tableau", "VS Code", "GitHub"]
    },
    {
      category: "Database",
      skills: ["MySQL"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem-Solving", "Team Collaboration", "Time Management"]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-theme-blue p-4">
                <h3 className="text-lg font-semibold text-white">{category.category}</h3>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} className="skill-badge">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
