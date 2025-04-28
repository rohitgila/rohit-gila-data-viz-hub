
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Oct 2024",
      link: "#"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera",
      date: "Nov 2024",
      link: "#"
    },
    {
      title: "Excel Power Tools for Data Analysis",
      issuer: "Macquarie University | Coursera",
      date: "May 2024",
      link: "#"
    },
    {
      title: "ChatGPT Advanced Data Analysis",
      issuer: "Vanderbilt University | Coursera",
      date: "April 2024",
      link: "#"
    },
    {
      title: "Data Structures and Algorithm",
      issuer: "GFG",
      date: "Nov 2023",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-theme-blue">{cert.title}</CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="text-gray-500">{cert.date}</Badge>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-theme-blue hover:underline text-sm"
                  >
                    View Certificate
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
