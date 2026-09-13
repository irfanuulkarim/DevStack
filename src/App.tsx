import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import type { Technology } from "./types/technology";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

  const addToStack = (technology: Technology) => {
    setSelectedTechnologies((current) => {
      if (current.some((item) => item.id === technology.id)) {
        toast.warning(`${technology.name} is already in your stack!`);
        return current;
      }

      toast.success(`${technology.name} added to your stack!`);

      return [...current, technology];
    });
  };

  const removeFromStack = (id: string) => {
    setSelectedTechnologies((current) => {
      const removedTechnology = current.find(
        (technology) => technology.id === id
      );

      if (removedTechnology) {
        toast.info(`${removedTechnology.name} removed from your stack.`);
      }

      return current.filter((technology) => technology.id !== id);
    });
  };

  const removeAllFromStack = () => {
    setSelectedTechnologies((current) => {
      if (current.length > 0) {
        toast.info("All technologies removed from your stack.");
      }

      return [];
    });
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TechnologySection
          selectedTechnologies={selectedTechnologies}
          onAddToStack={addToStack}
          onRemoveFromStack={removeFromStack}
          onRemoveAll={removeAllFromStack}
        />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;