const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <ul className="flex justify-center gap-6 p-4 text-lg font-semibold">
        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500">About Me</a></li>
        <li><a href="#projects" className="hover:text-blue-500">My Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
