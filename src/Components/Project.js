function Project({ name, image, desc, tech, git, link }) {
  return (
    <div className="flex flex-col md:flex-row mx-5 md:mx-0">
      <div className="  md:ml-60 relative rounded-md">
        <div className="bg-green-900 absolute inset-0 z-10 rounded-md  w-full opacity-70  transition duration-500 ease-in-out hover:opacity-0"></div>
        <img className="h-72 w-96  rounded-md " src={image} alt="" />
      </div>

      <div className="flex flex-col gap-y-5  justify-center items-start md:items-end mt-4 md:mt-0 ">
        <div className="flex flex-col items-start md:items-end">
          <p className="text-green-300  text-sm">Featured Project</p>
          <p className="text-2xl font-bold text-gray-200">{name}</p>
        </div>
        <p className="-ml-16 px-16 py-5 bg-gray-800 max-w-lg text-md text-gray-400 z-10">
          {desc}
        </p>
        <p className="text-sm text-gray-400 flex gap-x-4">
          {tech.map((tech) => (
            <p key={tech}>{tech}</p>
          ))}
        </p>
        <div className="flex gap-x-5 items-center">
          <a href={git} target="_blank" rel="noreferrer">
            <i className="fab fa-github text-gray-200 fa-lg"></i>
          </a>
          <a href={link} target="_blank" rel="noreferrer">
            <i className="fas fa-external-link-alt text-gray-200 fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
