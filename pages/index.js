import { useState } from "react";
import { projects } from "../src/data";

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  // HOMEPAGE
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
              style={{ cursor: "pointer" }}
            >
              <img
                src={project.afterImgs[0]}
                alt={`${project.title} thumbnail`}
                className="rounded-t-xl mb-3 mt-3"
                style={{
                  width: "420px", // doubled from 210px
                  height: "280px", // doubled from 140px
                  objectFit: "cover",
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

  // PROJECT DETAILS
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* BEFORE images */}
        <div>
          <h3 className="text-md font-medium mb-3 text-center">Before</h3>
          <div className="grid grid-cols-2 gap-4">
            {project.beforeImgs.map((src, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={src}
                  alt={`Before ${i + 1}`}
                  className="rounded-lg"
                  style={{
                    width: "290px", // doubled from 145px
                    height: "200px", // doubled from 100px
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <p className="mt-1 text-xs text-gray-600 text-center">{src.split("/").pop()}</p>
              </div>
            ))}
          </div>
        </div>
        {/* AFTER images */}
        <div>
          <h3 className="text-md font-medium mb-3 text-center">After</h3>
          <div className="grid grid-cols-2 gap-4">
            {project.afterImgs.map((src, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={src}
                  alt={`After ${i + 1}`}
                  className="rounded-lg"
                  style={{
                    width: "290px",
                    height: "200px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <p className="mt-1 text-xs text-gray-600 text-center">{src.split("/").pop()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
