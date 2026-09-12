import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../types/technology";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/src/data/technologies.json");
        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error("Failed to load technologies:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  return (
    <section
      id="technologies"
      className="bg-white px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Explore the{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <div className="flex min-h-60 items-center justify-center">
            <span className="loading loading-spinner loading-lg text-pink-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default TechnologySection;