import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import type { Technology } from "./types/technology";

function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);

  const addToStack = (technology: Technology) => {
    setSelectedTechnologies((current) => {
      if (current.some((item) => item.id === technology.id)) {
        return current;
      }

      return [...current, technology];
    });
  };

  const removeFromStack = (id: string) => {
    setSelectedTechnologies((current) =>
      current.filter((technology) => technology.id !== id)
    );
  };

  const removeAllFromStack = () => {
    setSelectedTechnologies([]);
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
    </>
  );
}

export default App;