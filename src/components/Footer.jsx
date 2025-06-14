import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#181e29] text-gray-200 py-10 px-4 border-t border-[#232a39]">
    <div className="flex justify-center">
      <div className="flex flex-row gap-x-16 max-w-4xl w-full">
        
        <div className="flex-1 min-w-[180px]">
          <h2 className="text-xl font-bold mb-2">Sandun Dilshan</h2>
          <p className="text-gray-400">
            Passionate IT student focused on<br />
            creating innovative interface by<br />
            using React and tailwind css for<br />
            for learning how develop user<br />
            experience
          </p>
        </div>
        
        <div className="flex-1 min-w-[120px]">
          <h2 className="text-xl font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Projects</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        
        <div className="flex-1 min-w-[120px]">
          <h2 className="text-xl font-bold mb-2">Connect With Me</h2>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/" className="bg-[#232a39] p-3 rounded-full hover:bg-[#232a39]/80 transition"><FaGithub size={22} /></a>
            <a href="https://www.linkedin.com/in/w-p-s-dilshan-8525b9305/" className="bg-[#232a39] p-3 rounded-full hover:bg-[#232a39]/80 transition"><FaLinkedin size={22} /></a>
            
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-[#232a39] my-8"></div>

    
    <div className="text-center text-gray-400 text-sm">
      © 2025 Sandun. Made with React and TailwindCSS
    </div>
  </footer>
);

export default Footer;
