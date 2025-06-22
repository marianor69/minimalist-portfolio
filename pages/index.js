import { useState } from 'react';
import { projects } from '../src/data.js';

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
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            NDC Home Renovations
          </h1>
          <p className="text-xl text-gray-600">
            Transform your space with our expert renovation services
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 border border-gray-200"
      onClick={onClick}
      style={{ maxWidth: '280px', margin: '0 auto' }}
    >
      <div className="w-full h-48 overflow-hidden">
        <img
          src={project.afterImgs[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          style={{ 
            width: '100%', 
            height: '192px', 
            objectFit: 'cover' 
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {project.description.length > 100 
            ? project.description.substring(0, 100) + '...' 
            : project.description}
        </p>
        <div className="mt-3 text-blue-600 text-sm font-semibold">
          View Project →
        </div>
      </div>
    </div>
  );
}

function ProjectDetail({ project, onBack }) {
  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with back button */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </button>
        </div>

        {/* Project Info */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Before/After Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before Column */}
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-red-600 bg-red-50 py-3 px-6 rounded-lg inline-block">
                BEFORE
              </h2>
            </div>
            <div className="space-y-4">
              {project.beforeImgs.map((img, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={img}
                    alt={`${project.title} - Before ${index + 1}`}
                    className="w-full h-auto object-contain"
                    style={{ 
                      maxHeight: '400px',
                      width: '100%',
                      height: 'auto'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* After Column */}
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-green-600 bg-green-50 py-3 px-6 rounded-lg inline-block">
                AFTER
              </h2>
            </div>
            <div className="space-y-4">
              {project.afterImgs.map((img, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={img}
                    alt={`${project.title} - After ${index + 1}`}
                    className="w-full h-auto object-contain"
                    style={{ 
                      maxHeight: '400px',
                      width: '100%',
                      height: 'auto'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-12"></div>
      </div>
    </div>
  );
}