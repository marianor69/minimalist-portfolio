import { useState } from "react";
import { projects } from "../src/data";

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  // HOMEPAGE: Projects grid as nice clickable tiles
  if (selected === null) {
    return (
      <main className="w-full px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">New Domus Renovation Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className="border rounded-xl shadow hover:shadow-2xl hover:scale-105 transition-all duration-150 bg-white flex flex-col items-center group"
            >
              <img
                src={project.afterImgs[0]}
                alt={`${project.title} thumbnail`}
                className="rounded-t-xl mb-3 mt-3"
                style={{
                  width: "210px",
                  height: "140px",
                  objectFit: "cover",
                  cursor: "pointer",
                  transition: "box-shadow 0.15s"
                }}
              />
              <h2 className="text-lg font-semibold text-center mb-4">{project.title}</h2>
            </div>
          ))}
        </div>
      </main>
    );
  }

  // PROJECT DETAILS: Before/After grid
  const project = projects[selected];

  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-8">
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
                  style={{
                    width: "145px",
                    height: "100px",
                    objectFit: "cover",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: "0.5rem"
                  }}
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
                  style={{
                    width: "145px",
                    height: "100px",
                    objectFit: "cover",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: "0.5rem"
                  }}
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
