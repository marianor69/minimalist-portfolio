import { useState } from "react";
import { projects } from "../src/data";

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  // HOME PAGE: Grid of tiles, 4 per row, not huge
  if (selected === null) {
    return (
      <main className="w-full px-4 py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">New Domus Renovation Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className="rounded-xl bg-white border hover:shadow-2xl transition-transform hover:scale-105 cursor-pointer flex flex-col items-center p-2"
              style={{ maxWidth: 220, margin: "auto" }}
            >
              <img
                src={project.afterImgs[0]}
                alt={`${project.title} thumbnail`}
                className="rounded-xl w-[200px] h-[120px] object-cover mb-3"
                style={{ boxShadow: "0 2px 8px #0002" }}
              />
              <h2 className="text-lg font-semibold text-center mb-2">{project.title}</h2>
            </div>
          ))}
        </div>
      </main>
    );
  }

  // DETAIL PAGE: Each row has a BEFORE (left) and AFTER (right) image side by side
  const project = projects[selected];
  // Use the shortest length so we don’t get out-of-bounds errors
  const rows = Math.max(project.beforeImgs.length, project.afterImgs.length);

  return (
    <main className="w-full max-w-4xl mx-auto px-4 py-10">
      <button
        onClick={() => setSelected(null)}
        className="text-blue-600 underline mb-6 block text-left"
      >
        ← Back to Projects
      </button>
      <h1 className="text-3xl font-bold mb-3 text-center">{project.title}</h1>
      <p className="mb-6 text-center text-gray-700">{project.description}</p>
      <div className="grid grid-cols-2 gap-8">
        <h3 className="text-lg font-medium mb-2 text-center col-span-1">Before</h3>
        <h3 className="text-lg font-medium mb-2 text-center col-span-1">After</h3>
        {Array.from({ length: rows }).map((_, i) => (
          <>
            <div key={`before-${i}`} className="flex flex-col items-center mb-4">
              {project.beforeImgs[i] ? (
                <>
                  <img
                    src={project.beforeImgs[i]}
                    alt={`Before ${i + 1}`}
                    className="rounded-lg w-[200px] h-[120px] object-cover mb-1"
                  />
                  <p className="text-xs text-gray-600 text-center">{project.beforeImgs[i].split("/").pop()}</p>
                </>
              ) : null}
            </div>
            <div key={`after-${i}`} className="flex flex-col items-center mb-4">
              {project.afterImgs[i] ? (
                <>
                  <img
                    src={project.afterImgs[i]}
                    alt={`After ${i + 1}`}
                    className="rounded-lg w-[200px] h-[120px] object-cover mb-1"
                  />
                  <p className="text-xs text-gray-600 text-center">{project.afterImgs[i].split("/").pop()}</p>
                </>
              ) : null}
            </div>
          </>
        ))}
      </div>
    </main>
  );
}
