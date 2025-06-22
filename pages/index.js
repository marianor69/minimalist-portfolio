import { useState } from "react";
import { projects } from "../src/data";

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  if (selected === null) {
    return (
      <main className="w-full px-4 py-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">New Domus Renovation Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className="cursor-pointer border rounded-lg p-3 hover:shadow-xl transition"
            >
              <img
                src={project.afterImgs[0]}
                alt={`${project.title} thumbnail`}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-lg font-semibold text-center">{project.title}</h2>
            </div>
          ))}
        </div>
      </main>
    );
  }

  const project = projects[selected];

  return (
    <main className="w-full px-4 py-6 max-w-6xl mx-auto">
      <button
        onClick={() => setSelected(null)}
        className="text-blue-600 underline mb-4 block"
      >
        ← Back to Projects
      </button>

      <h1 className="text-3xl font-bold mb-4 text-center">{project.title}</h1>
      <p className="mb-6 text-center text-gray-700">{project.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-md font-medium mb-2">Before</h3>
          <div className="grid grid-cols-2 gap-2">
            {project.beforeImgs.map((src, i) => {
              const fileName = src.split("/").pop();
              return (
                <div key={i} className="text-center">
                  <img src={src} alt={`Before ${i + 1}`} className="w-full rounded-lg" />
                  <p className="mt-1 text-xs text-gray-600">{fileName}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="text-md font-medium mb-2">After</h3>
          <div className="grid grid-cols-2 gap-2">
            {project.afterImgs.map((src, i) => {
              const fileName = src.split("/").pop();
              return (
                <div key={i} className="text-center">
                  <img src={src} alt={`After ${i + 1}`} className="w-full rounded-lg" />
                  <p className="mt-1 text-xs text-gray-600">{fileName}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
