import { FaUserGraduate, FaMapMarkerAlt, FaArrowRight, FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="h-[600px] flex flex-col justify-center items-center bg-[#eef8fd] relative"
    >
    
     <img
      src="/profile.png"
      alt="My Photo"
      className="w-48 h-48 rounded-full border-4 border-white shadow-xl mb-6 object-cover"
    />


      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-2">
        Hi, I'm <span className="text-blue-600">Sandun Dilshan</span>
      </h1>

      <p className="text-xl md:text-2xl text-gray-700 mt-2 mb-4 text-center">Passionate Front End Developer</p>

      <span className="flex items-center bg-white/10 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
         <FaUserGraduate className="mr-2 text-[#3a8dde]" />
         <span className="text-blue-600">2nd Year IT Student</span>
      </span>

      <p className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mb-8 px-2">
        I’m a frontend developer who enjoys building clean, responsive
         and easy-to-use websites.
      </p>
    </section>
  );
};

export default Home;
