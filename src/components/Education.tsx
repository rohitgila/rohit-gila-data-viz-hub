
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      location: "Phagwara, Punjab",
      duration: "Since 2022",
      grade: "CGPA: 6.97",
      logo: "/lovable-uploads/fc456bb1-67c3-4a03-b4ae-510f6af57e5e.png"
    },
    {
      institution: "VSPS Vidya Shree Public School",
      degree: "Intermediate",
      field: "",
      location: "Didwana, Rajasthan",
      duration: "2019 - 2021",
      grade: "Percentage: 84.83%",
      logo: "https://img.freepik.com/free-vector/flat-design-school-logo-template_23-2149668212.jpg"
    },
    {
      institution: "VPS Vivekanand Sr. Sec. School",
      degree: "Matriculation",
      field: "",
      location: "Didwana, Rajasthan",
      duration: "2007 - 2019",
      grade: "Percentage: 96.80%",
      logo: "https://img.freepik.com/free-vector/hand-drawn-school-logo-design_23-2149686252.jpg"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center">Education</h2>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="flex flex-col md:flex-row hover:shadow-md transition-all duration-300">
              <div className="p-6 flex items-center justify-center md:w-1/5 bg-gray-50 border-r border-gray-100">
                <img 
                  src={edu.logo} 
                  alt={`${edu.institution} logo`}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="flex-1">
                <CardHeader>
                  <CardTitle className="text-xl text-theme-blue">{edu.institution}</CardTitle>
                  <CardDescription className="flex items-center text-sm text-gray-500">
                    <CalendarIcon className="h-4 w-4 mr-1" /> {edu.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base font-medium">{edu.degree}{edu.field ? ` - ${edu.field}` : ""}</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between mt-2">
                    <p className="text-sm text-gray-500">{edu.location}</p>
                    <p className="text-sm font-medium text-theme-blue">{edu.grade}</p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
