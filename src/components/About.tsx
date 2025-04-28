
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mx-auto text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="p-6 md:p-8 shadow-md">
            <p className="text-gray-700 mb-4">
              I am a Computer Science Engineering student at Lovely Professional University with a passion for data analysis and software development. My technical journey has equipped me with skills in multiple programming languages and data visualization tools.
            </p>
            <p className="text-gray-700 mb-4">
              I specialize in analyzing complex datasets and creating insightful visualizations that drive decision-making. My projects showcase my ability to extract meaningful insights from data through various analytical techniques.
            </p>
            <p className="text-gray-700">
              Beyond technical skills, I value collaboration and problem-solving. I'm constantly expanding my knowledge through certifications and practical projects, aiming to make meaningful contributions to the field of data science and software engineering.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
