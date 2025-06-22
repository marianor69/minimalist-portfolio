import { useState } from 'react';
import { projects } from '../data/data.js';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={handleBackClick} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            NDC Home Renovations
          </h1>
          <p className="text-lg text-gray-600">
            Transform your space with our expert renovation services
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectTile
              key={index}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectTile({ project, onClick }) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      onClick={onClick}
    >
      <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
        <img
          src={project.afterImgs[0]}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {project.description}
        </p>
      </div>
    </div>
  );
}

function ProjectDetail({ project, onBack }) {
  const maxImages = Math.max(project.beforeImgs.length, project.afterImgs.length);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with back button */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mr-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </button>
        </div>

        {/* Project Info */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {project.description}
          </p>
        </div>

        {/* Before/After Headers */}
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 pb-4 border-b-2 border-red-500">
              BEFORE
            </h2>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 pb-4 border-b-2 border-green-500">
              AFTER
            </h2>
          </div>
        </div>

        {/* Before/After Images Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Before Images Column */}
          <div className="space-y-6">
            {project.beforeImgs.map((img, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={img}
                  alt={`${project.title} - Before ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          {/* After Images Column */}
          <div className="space-y-6">
            {project.afterImgs.map((img, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={img}
                  alt={`${project.title} - After ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom margin for better spacing */}
        <div className="h-12"></div>
      </div>
    </div>
  );
}