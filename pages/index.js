import { useState } from "react";
import { projects } from "../src/data";

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  if (selected === null) {
    // HOMEPAGE: Project Tiles
    return (
      <main className="w-full px-4 py-6">
        <h1 className="text-4xl font-bold mb-8 text-center">New Domus Renovation Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className="cursor-pointer border rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all duration-150 bg-white flex flex-col items-center"
              style={{ minHeight: 220 }}
            >
              <img
                src={project.afterImgs[0]}
                alt={`${project.title} thumbnail`}
                className="w-[220px] h-[160px] object-cover rounded-t-xl"
                style={{ marginTop: 10 }}
              />
              <h2 className="text-lg font-semibold text-center mt-3 mb-4">{project.title}</h2>
            </div>
          ))}
        </div>
      </main>
    );
  }

  // PROJECT DETAILS: Before/After images side by side, small thumbs
  const project = projects[selected];

  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-6">
      <button
        onClick={() => setSelected(null)}
        className="text-blue-600 underline mb-4 block text-left"
      >
        ← Back to Projects
      </button>

      <h1 className="text-3xl font-bold mb-2 text-center">{project.title}</h1>
      <p className="mb-6 text-center text-gray-700">{project.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Before Images */}
        <div>
          <h3 className="text-md font-medium mb-2 text-center">Before</h3>
          <div className="grid grid-cols-2 gap-3">
            {project.beforeImgs.map((src, i) => (
              <div key={i} className="text-center">
                <img
                  src={src}
                  alt={`Before ${i + 1}`}
                  className="w-[160px] h-[110px] object-cover rounded-lg mx-auto"
                />
                <p className="mt-1 text-xs text-gray-600">{src.split("/").pop()}</p>
              </div>
            ))}
          </div>
        </div>
        {/* After Images */}
        <div>
          <h3 className="text-md font-medium mb-2 text-center">After</h3>
          <div className="grid grid-cols-2 gap-3">
            {project.afterImgs.map((src, i) => (
              <div key={i} className="text-center">
                <img
                  src={src}
                  alt={`After ${i + 1}`}
                  className="w-[160px] h-[110px] object-cover rounded-lg mx-auto"
                />
                <p className="mt-1 text-xs text-gray-600">{src.split("/").pop()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
