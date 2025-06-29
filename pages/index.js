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
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <header style={{
          textAlign: 'center',
          marginBottom: '50px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '15px',
            fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
          }}>
            New Domus Inc. Home Renovations
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
          }}>
            Transforming spaces with our expert renovation services
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px',
          justifyItems: 'center'
        }}>
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: isHovered ? '0 10px 30px rgba(0,0,0,0.2)' : '0 5px 15px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        cursor: 'pointer',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.3s ease',
        width: '280px',
        border: '1px solid #e5e5e5'
      }}
    >
      <div style={{
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <img
          src={project.afterImgs[0]}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease'
          }}
        />
      </div>
      <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontWeight: 'bold',
          fontSize: '1.1rem',
          color: '#333',
          marginBottom: '6px',
          lineHeight: '1.3',
          fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
        }}>
          {project.title}
        </h3>
        <div style={{
          color: '#333',
          fontSize: '0.96rem',
          fontWeight: '500',
          marginBottom: '10px',
          fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
        }}>
          {project.location}
        </div>
        <div style={{
          color: '#333',
          fontSize: '0.92rem',
          fontWeight: 'normal',
          marginBottom: '15px',
          fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
        }}>
          {project.tagline}
        </div>
        {/* "View →" removed as per your request */}
      </div>
    </div>
  );
}

function ProjectDetail({ project, onBack }) {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Header with back button */}
        <div style={{
          marginBottom: '40px'
        }}>
          <button
            onClick={onBack}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#333',
              color: 'white',
              padding: '12px 20px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
              fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
            }}
          >
            <span style={{ marginRight: '8px' }}>←</span>
            Back to Projects
          </button>
        </div>

        {/* Project Info */}
        <div style={{
          textAlign: 'center',
          marginBottom: '50px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px',
            fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
          }}>
            {project.title}
          </h1>
          <div style={{
            color: '#333',
            fontSize: '1.15rem',
            fontWeight: '500',
            marginBottom: '28px',
            fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
          }}>
            {project.location}
          </div>
          <div style={{
            color: '#333',
            fontSize: '1.03rem',
            fontWeight: 'normal',
            marginBottom: '36px',
            fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
          }}>
            {project.tagline}
          </div>
          <p style={{
            fontSize: '1.1rem',
            color: '#333',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
          }}>
            {project.description}
          </p>
        </div>

        {/* Before/After Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px'
        }}>
          {/* Before Column */}
          <div>
            <div style={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              background: '#f8f9fa',
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#dc2626',
                backgroundColor: '#fef2f2',
                padding: '15px 30px',
                borderRadius: '10px',
                display: 'inline-block',
                border: '2px solid #dc2626',
                fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
              }}>
                BEFORE
              </h2>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {project.beforeImgs.map((img, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  padding: '10px'
                }}>
                  <img
                    src={img}
                    alt={`${project.title} - Before ${index + 1}`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '400px',
                      objectFit: 'contain',
                      borderRadius: '5px'
                    }}
                  />
                  <p style={{
                    textAlign: 'center',
                    marginTop: '10px',
                    fontSize: '0.9rem',
                    color: '#666',
                    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
                  }}>
                    {img.split('/').pop()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* After Column */}
          <div>
            <div style={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              background: '#f8f9fa',
              textAlign: 'center',
              marginBottom: '30px'
            }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#16a34a',
                backgroundColor: '#f0fdf4',
                padding: '15px 30px',
                borderRadius: '10px',
                display: 'inline-block',
                border: '2px solid #16a34a',
                fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
              }}>
                AFTER
              </h2>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {project.afterImgs.map((img, index) => (
                <div key={index} style={{
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  padding: '10px'
                }}>
                  <img
                    src={img}
                    alt={`${project.title} - After ${index + 1}`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '400px',
                      objectFit: 'contain',
                      borderRadius: '5px'
                    }}
                  />
                  <p style={{
                    textAlign: 'center',
                    marginTop: '10px',
                    fontSize: '0.9rem',
                    color: '#666',
                    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
                  }}>
                    {img.split('/').pop()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom spacing */}
        <div style={{ height: '50px' }}></div>
      </div>
    </div>
  );
}
