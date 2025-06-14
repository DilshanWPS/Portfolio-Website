import SkillBar from "./SkillBar";
import { FaGraduationCap, FaBullseye, FaBookOpen, FaCircle } from "react-icons/fa";

const frontendSkills = [
  { name: "React", level: "Beginner", category: "Frontend" },
  { name: "JavaScript", level: "Beginner", category: "Frontend" },
  { name: "Tailwind CSS", level: "Beginner", category: "Frontend" },
  { name: "HTML5", level: "Intermediate", category: "Frontend" },
  { name: "CSS3", level: "Intermediate", category: "Frontend" },
];

const backendSkills = [
  { name: "Node.js", level: "Beginner", category: "Backend" },
  { name: "Express.js", level: "Beginner", category: "Backend" },
  { name: "REST APIs", level: "Beginner", category: "Backend" }
];

const databaseSkills= [
  { name: "My SQL", level: "Beginner", category: "Database" },
  { name: "Mongo DB", level: "Beginner", category: "Database" },
  
];


const About = () => (
  <section id="about" className="py-16 bg-white min-h-screen">
    
    <div className="max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl font-extrabold text-black text-center mb-6">
         About Me
      </h2>

      <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed bg-gray-50 rounded-xl shadow-md px-6 py-6 mb-6">
        Hello! I&apos;m Sandun Dilshan, a passionate IT undergraduate with a love for web development and user experience design. I enjoy building digital solutions, learning new technologies, and collaborating with others to create meaningful products. My journey is shaped by curiosity, creativity, and a drive for continuous improvement.
      </p>
    </div>

    
    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-8 mb-16">
      
      <div className="flex-1 max-w-sm bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start border border-gray-100">
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-full p-4 mb-4">
          <FaGraduationCap className="text-white text-3xl" />
        </div>
        <h3 className="text-xl font-bold mb-2">Education</h3>
        <p className="font-semibold">I am following NDT IT </p>
        <p className="text-gray-600">Institute of technology</p>
        <p className="text-gray-600">University of moratuwa</p>
        <p className="text-gray-400 mb-2 text-sm">Started at 2024</p>
      </div>

      <div className="flex-1 max-w-sm bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start border border-gray-100">
        <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-full p-4 mb-4">
          <FaBullseye className="text-white text-3xl" />
        </div>
        <h3 className="text-xl font-bold mb-2">Career Goals</h3>
        <ul className="list-disc ml-5 text-gray-700 space-y-1">
          <li>Secure a software development internship</li>
          <li>Become a full stack developer</li>
          <li>Contribute to open-source projects</li>
        </ul>
      </div>

      <div className="flex-1 max-w-sm bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start border border-gray-100">
        <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-full p-4 mb-4">
          <FaBookOpen className="text-white text-3xl" />
        </div>
        <h3 className="text-xl font-bold mb-2">Interests</h3>
        <ul className="list-disc ml-5 text-gray-700 space-y-1">
          <li>User Experience (UX) Design</li>
          <li>Web Development & Design</li>
          <li>Mobile App Development</li>
          <li>Devops Engineering</li>
        </ul>
      </div>
    </div>

    <div className="max-w-6xl mx-auto">
      <h3 className="text-3xl font-extrabold text-black text-center mb-6">
         Technical Skills
      </h3>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaCircle className="text-blue-600 mr-2 text-xs" />
          <h4 className="text-xl font-semibold">Frontend</h4>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {frontendSkills.map(skill => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaCircle className="text-blue-600 mr-2 text-xs" />
          <h4 className="text-xl font-semibold">Backend</h4>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {backendSkills.map(skill => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaCircle className="text-blue-600 mr-2 text-xs" />
          <h4 className="text-xl font-semibold">Database</h4>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {databaseSkills.map(skill => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
