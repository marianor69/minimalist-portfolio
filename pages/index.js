import { useState } from "react";
import { projects } from "../src/data";

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  if (selected === null) {
    return (
      <main className="w-full px-4 py-6">
        <h1 className="text-4xl font-bold mb-6 text-center">New Domus Renovation Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className="cursor-pointer border rounded-md p-2 hover:shadow-md hover:scale-105 transition-transform duration-200"
            >
              <img
                src={project.afterImgs[0]}
                alt={`${project.title} thumbnail`}
                className="w-full h-36 object-cover rounded mb-2"
              />
              <h2 className="text-center text-lg font-semibold">{project.title}</h2>
            </div>
          ))}
        </div>
      </main>
    );
  }

  const project = projects[selected];

  return (
    <main className="w-full px-4 py-6">
      <button
        onClick={() => setSelected(null)}
        className="text-blue-600 underline mb-4 block"
      >
        ← Back to Projects
      </button>

      <h1 className="text-3xl font-bold text-center mb-2">{project.title}</h1>
      <p className="text-center text-gray-600 mb-6">{project.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-md font-medium mb-2">Before</h3>
          <div className="grid grid-cols-2 gap-2">
            {project.beforeImgs.map((src, i) => (
              <div key={i} className="text-center">
                <img src={src} alt={`Before ${i + 1}`} className="w-full rounded" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-md font-medium mb-2">After</h3>
          <div className="grid grid-cols-2 gap-2">
            {project.afterImgs.map((src, i) => (
              <div key={i} className="text-center">
                <img src={src} alt={`After ${i + 1}`} className="w-full rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
