function Project2({ name, image, desc, tech, git, link }) {
  console.log(tech);
  return (
    <div className="flex">
      <div className="flex flex-col gap-y-5  justify-center items-start ml-40 ">
        <div className="flex flex-col items-start">
          <p className="text-green-300  text-sm">Featured Project</p>
          <p className="text-2xl font-bold text-gray-200">{name}</p>
        </div>
        <p className="-mr-16 px-16 py-5 bg-gray-800 max-w-lg text-md text-gray-400 z-20">
          {desc}
        </p>
        <p className="text-sm text-gray-400 flex gap-x-4">
          {tech.map((tech) => (
            <p>{tech}</p>
          ))}
        </p>
        <div className="flex gap-x-5 items-center">
          <a href={git}>
            <i classname="fab fa-github text-gray-200 fa-lg"></i>
          </a>
          <a href={link}>
            <i classname="fas fa-external-link-alt text-gray-200 fa-lg"></i>
          </a>
        </div>
      </div>
      <div className="  relative ">
        <div className="bg-green-900 absolute inset-0 z-10  w-full opacity-70"></div>
        <img className="h-72  bg-opacity-80  " src={image} alt="" />
      </div>
    </div>
  );
}

export default Project2;
