function About() {
  return (
    <div
      id="About"
      className="flex flex-col ml-5 md:ml-40 lg:ml-60 gap-y-5 h-screen md:mt-10"
    >
      <p className="text-3xl text-gray-200 font-bold ">About Me</p>
      <p className="text-lg text-gray-400 max-w-xs md:max-w-lg">
        Hello! My name is Sourabh and i enjoy creating beautifull thing for
        internet . my interest is developing websites and making beautifull user
        interfaces which enhances the user experience
      </p>
      <p className="text-lg text-gray-400 max-w-xs md:max-w-lg">
        I started with hacking websites learing about how website got hacked and
        get into web development to understand how websites work and learnt many
        things about websites and how they got hacked and what are the security
        issues , but for just some time i started working on frontend and find
        it enjoyable , and i always like visual things and started frontend
        development as my career
      </p>
      <p className="text-lg text-gray-400  max-w-xs md:max-w-lg ">
        here are Some technology i've been working with
        <div className="flex gap-x-20 mt-5">
          <div className="flex flex-col gap-y-2 ">
            <p className="text-green-400 font-mono text-sm"># Html</p>
            <p className="text-green-400 font-mono text-sm"># Css </p>
            <p className="text-green-400 font-mono text-sm"># tailwind css</p>
          </div>
          <div className="flex flex-col gap-y-2 ">
            <p className="text-green-400 font-mono text-sm"># Javascript</p>
            <p className="text-green-400 font-mono text-sm"># React Js </p>
            <p className="text-green-400 font-mono text-sm"># Node Js</p>
          </div>
        </div>
      </p>
    </div>
  );
}

export default About;
