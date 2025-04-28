
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "NGO Collaboration for SDG Initiatives",
      description: "Contributed to projects on Zero Food Security and Nutrition.",
      date: "Oct 2023"
    },
    {
      title: "School Sports Representative",
      description: "Competed in athletics and team sports at inter-school events, demonstrating teamwork and discipline.",
      date: "Nov 2019"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-300 border-l-4 border-l-theme-blue">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-theme-light-blue flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-theme-blue" />
                </div>
                <div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <p className="text-sm text-gray-500">{achievement.date}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
