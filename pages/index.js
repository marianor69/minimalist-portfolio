import { useState } from "react";
import { projects } from "@/data";


export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  if (selected === null) {
    // 🏠 MAIN PAGE with all projects shown as image tiles
    return (
      <main className="w-full px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">New Domus Renovation Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className="cursor-pointer border rounded-lg p-4 hover:shadow-lg"
            >
              <img
                src={project.afterImgs[0]} // First AFTER photo as thumbnail
                alt={`${project.title} thumbnail`}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h2 className="text-xl font-semibold text-center">{project.title}</h2>
            </div>
          ))}
        </div>
      </main>
    );
  }

  // 🛠 PROJECT DETAIL PAGE with Before / After images
  const project = projects[selected];

  return (
    <main className="w-full px-4">
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
          <div className="grid grid-cols-1 gap-2">
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
          <div className="grid grid-cols-1 gap-2">
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
