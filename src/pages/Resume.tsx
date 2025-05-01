
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center mb-8">Resume</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 bg-theme-blue text-white flex justify-between items-center">
            <h3 className="text-xl font-bold">Rohit Gila - Resume</h3>
            <Button className="bg-white text-theme-blue hover:bg-gray-100">
              <a href="/lovable-uploads/66f54a3f-bb9c-474d-a45a-39a62a6bab7d.png" download="Rohit_Gila_Resume.png">
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="p-6">
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/66f54a3f-bb9c-474d-a45a-39a62a6bab7d.png" 
                alt="Rohit Gila Resume" 
                className="w-full max-w-3xl rounded-md shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
