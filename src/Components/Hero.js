import Sidebar from "./Sidebar";

function Hero() {
  return (
    <div id="Home" className="flex">
      <Sidebar />
      <div className="  flex flex-col gap-y-5 ml-5 md:ml-28 lg:ml-48 mt-20 h-screen  items-start">
        <p className="animate-faderight text-lg  text-green-300 font-mono">
          Hi, my name is
        </p>
        <p className="animate-fadeleft text-4xl md:text-5xl lg:text-7xl font-bold text-gray-300">
          Sourabh Grover.
        </p>
        <p className="animate-faderight text-4xl md:text-5xl lg:text-7xl font-bold text-gray-400">
          I build experience for web.
        </p>
        <p className=" animate-fadeleft text-lg font-normal text-gray-400 max-w-xs md:max-w-xl">
          I am a FrontEnd Developer who loves to create Beautifull and
          responsive User interfaces and writes clean code
        </p>

        <form
          className="flex flex-col gap-y-10 justify-center items-start"
          action="mailto:souravgro25@gmail.com"
          method="Post"
          encType="multipart/form-data"
          name="EmailForm"
        >
          <input
            className="mt-10 self-start px-8 md:px-10 py-4 rounded-md border-2 border-green-400 text-green-300 font-normal bg-gray-900 text-lg hover:bg-gray-800 "
            type="submit"
            value="Get In Touch  "
          />
        </form>
      </div>
      <div className="hidden md:flex flex-col gap-y-10 ml-10 mr-5 fixed right-0 bottom-60 -mr-8">
        <form
          action="mailto:souravgro25@gmail.com"
          method="Post"
          encType="multipart/form-data"
          name="EmailForm"
        >
          <input
            className="bg-transparent text-gray-300 font-mono text-sm transform rotate-90 tracking-wider transition duration-500 ease-in-out transform hover:transform-y-1 hover:scale-110 hover:text-green-400 "
            type="submit"
            value="Souravgro25@gmail.com"
          />
        </form>
      </div>
    </div>
  );
}

export default Hero;
