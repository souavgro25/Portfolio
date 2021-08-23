function Contact() {
  return (
    <div
      id="Contact"
      className="flex flex-col justify-center mt-10 items-center h-screen "
    >
      <p className=" text-gray-300 font-bold text-4xl md:text-5xl mb-10 ">
        Get In Touch{" "}
      </p>
      <p className=" text-gray-400 font-mono text-sm md:text-md mb-20 max-w-xs md:max-w-lg ">
        If You have any Question or any New Opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I'll try my
        best to get back to you!
      </p>
      <form
        className="flex flex-col gap-y-10 justify-center items-start"
        action="mailto:souravgro25@gmail.com"
        method="Post"
        encType="multipart/form-data"
        name="EmailForm"
      >
        {/* <input
          className="placeholder-green-300 pl-3 border-2 border-green-400 bg-gray-900 rounded-md text-green-300"
          placeholder="Name"
          type="text"
          size="19"
          name="Name"
        />
        <textarea
          className="placeholder-green-300 pl-3 border-2 border-green-400 bg-gray-900 rounded-lg text-green-300"
          placeholder="Message"
          name="message"
          id=""
          cols="30"
          rows="10"
        ></textarea> */}
        <input
          className="px-5 py-3 md:px-8 md:py-4 border-2 border-green-400 bg-gray-900 text-green-300 text-md rounded-lg hover:bg-gray-800"
          type="submit"
          value="Say Hello! "
        />
      </form>
    </div>
  );
}

export default Contact;
