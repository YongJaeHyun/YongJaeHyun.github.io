import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Archives from "./components/pages/Archives";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div className="relative">
      {!isLoading ? (
        <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
          <span className="sr-only">Loading...</span>
          <div className="h-8 w-8 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 bg-pink-400 rounded-full animate-bounce"></div>
        </div>
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Archives />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
