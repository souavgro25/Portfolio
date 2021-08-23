function Sidebar() {
  return (
    <div className="md:flex justify-start items-center bottom-40 fixed hidden">
      <div className="flex flex-col gap-y-10 ml-10 mr-5">
        <a
          href="https://instagram.com/sourav7755"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram text-gray-400 fa-lg transition duration-500 ease-in-out transform hover:transform-y-1 hover:scale-110 hover:text-green-400 "></i>
        </a>

        <a
          href="https://github.com/souavgro25/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github text-gray-400 fa-lg transition duration-500 ease-in-out transform hover:transform-y-1 hover:scale-110 hover:text-green-400"></i>{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/sourabh-grover-217677170/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in text-gray-400 fa-lg transition duration-500 ease-in-out transform hover:transform-y-1 hover:scale-110 hover:text-green-400"></i>
        </a>
        <a
          href="https://twitter.com/Souravgro?s=08"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter text-gray-400 fa-lg transition duration-500 ease-in-out transform hover:transform-y-1 hover:scale-110 hover:text-green-400"></i>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
