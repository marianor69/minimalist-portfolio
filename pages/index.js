import { useState } from 'react';

const projects = [
  {
    title: "Caniff Ln - CARY, NC",
    description: "On this house we have installed all new hardwood floors, kitchen cabinets, lighting, paint, bathrooms, outdoor patio, landscaping.",
    beforeImgs: [
      "/images/Caniff-before/1.jpeg",

     
      "/images/Caniff-before/4.jpeg",
      
      "/images/Caniff-before/5.jpeg",
      
      "/images/Caniff-before/6.jpeg",
      
      "/images/Caniff-before/7.jpeg",
            "/images/Caniff-before/10.jpeg",

       "/images/Caniff-before/2.jpeg",
      
      "/images/Caniff-before/3.jpeg",
      
      "/images/Caniff-before/8.jpeg",
      
      "/images/Caniff-before/9.jpeg"
      
    ],
    afterImgs: [
      "/images/Caniff-after/1.jpeg",
      "/images/Caniff-after/2.jpeg",
      "/images/Caniff-after/3.jpeg",
      "/images/Caniff-after/4.jpeg",
      "/images/Caniff-after/5.jpeg",
      "/images/Caniff-after/6.jpeg",
      "/images/Caniff-after/7.jpeg",
      "/images/Caniff-after/8.jpeg",
      "/images/Caniff-after/9.jpeg",
      "/images/Caniff-after/10.jpeg",
      "/images/Caniff-after/11.jpeg",
      "/images/Caniff-after/12.jpeg",
      "/images/Caniff-after/13.jpeg",
      "/images/Caniff-after/14.jpeg",
      "/images/Caniff-after/15.jpeg",
      "/images/Caniff-after/16.jpeg",
      "/images/Caniff-after/17.jpeg"
    ]
  },
  {
    title: "Joel Ct - CARY, NC",
    description: "Opened up kitchen. New hardwood flooring. Remodeled bathrooms, landscaping, new lighting. All new appliances",
    beforeImgs: [
      "/images/Joel-before/7.jpeg",
      
      "/images/Joel-before/3.jpeg",
      "/images/Joel-before/2.jpeg",
      "/images/Joel-before/4.jpeg",
      "/images/Joel-before/5.jpeg",
      "/images/Joel-before/6.jpeg",
      "/images/Joel-before/1.jpeg"
    ],
    afterImgs: [
      "/images/Joel-after/1.jpeg",
      "/images/Joel-after/2.jpeg",
      "/images/Joel-after/5.jpeg",
      "/images/Joel-after/6.jpeg",
      "/images/Joel-after/7.jpeg",
      "/images/Joel-after/8.jpeg",
      "/images/Joel-after/9.jpeg",
      "/images/Joel-after/10.jpeg",
      "/images/Joel-after/11.jpeg",
      "/images/Joel-after/3.jpeg",
      "/images/Joel-after/4.jpeg"
    ]
  },
  {
    title: "Wyman Pl - DURHAM, NC",
    description: "Integrated kitchen, new door to new deck. New hardwood flooring. Remodeled bathrooms, landscaping, new fence. All new appliances. Encapsulated crawl space.",
    beforeImgs: [
      "/images/Wyman-before/1.jpeg",
      "/images/Wyman-before/2.jpeg",
      "/images/Wyman-before/3.jpeg",
      "/images/Wyman-before/4.jpeg",
      "/images/Wyman-before/5.jpeg",
      "/images/Wyman-before/6.jpeg",
      "/images/Wyman-before/7.jpeg",
      "/images/Wyman-before/8.jpeg",
      "/images/Wyman-before/9.jpeg",
      "/images/Wyman-before/10.jpeg"
    ],
    afterImgs: [
      "/images/Wyman-after/1.jpeg",
      "/images/Wyman-after/2.jpeg",
      "/images/Wyman-after/3.jpeg",
      "/images/Wyman-after/4.jpeg",
      "/images/Wyman-after/5.jpeg",
      "/images/Wyman-after/6.jpeg",
      "/images/Wyman-after/7.jpeg",
      "/images/Wyman-after/8.jpeg",
      "/images/Wyman-after/9.jpeg",
      "/images/Wyman-after/10.jpeg",
      "/images/Wyman-after/11.jpeg",
      "/images/Wyman-after/12.jpeg",
      "/images/Wyman-after/13.jpeg"
    ]
  }
];

export default function Portfolio() {
  const [selected, setSelected] = useState(0);

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">My Renovation Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div key={i} onClick={() => setSelected(i)} className="cursor-pointer border rounded-lg p-4 hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">{projects[selected].title}</h2>
        <p className="mb-4 text-gray-700">{projects[selected].description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-md font-medium mb-2">Before</h3>
            <div className="grid grid-cols-1 gap-2">
              {projects[selected].beforeImgs.map((src, i) => {
                const fileName = src.split('/').pop();
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
              {projects[selected].afterImgs.map((src, i) => {
                const fileName = src.split('/').pop();
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
      </div>
    </main>
  );
}
