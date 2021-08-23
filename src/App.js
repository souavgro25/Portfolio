import React, { useState, lazy, Suspense } from "react";
import Loading from "./Components/Loading";
const Header = lazy(() => import("./Components/Header"));
const Dropdown = lazy(() => import("./Components/Dropdown"));
const Hero = lazy(() => import("./Components/Hero"));
const About = lazy(() => import("./Components/About"));
const Work = lazy(() => import("./Components/Work"));

const Contact = lazy(() => import("./Components/Contact"));

function App() {
  const [isopen, setisopen] = useState(false);

  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <div className="bg-gray-900 h-full">
      <Suspense fallback={<Loading />}>
        <Header toggle={toggle} />
        <Dropdown isopen={isopen} />
        <Hero />
        <About />
        <Work />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
