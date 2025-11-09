import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  behindTheCode?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Bookkeeping System",
    description: "Income & expense management app with PDF reporting.",
    technologies: ["Node.js", "TypeScript", "MongoDB"],
    image: "/projects/bookkeeping.svg",
    behindTheCode: "Implemented clean architecture with Domain-Driven Design principles. Features include real-time calculations, PDF report generation, and secure user authentication.",
    liveUrl: "https://github.com/rivksh",
    githubUrl: "https://github.com/rivksh"
  },
  {
    title: "PalettePro",
    description: "Designer platform for creating and sharing color palettes.",
    technologies: ["Angular", "Node.js"],
    image: "/projects/palettepro.svg",
    behindTheCode: "Built with Angular for optimal performance and state management. Includes features like color extraction from images, palette suggestions using ML, and social sharing capabilities.",
    liveUrl: "https://github.com/rivksh",
    githubUrl: "https://github.com/rivksh"
  },
  {
    title: "Car Rental Subscription Site",
    description: "User subscriptions and admin dashboard built with C#.NET and React.",
    technologies: ["C#.NET", "React"],
    image: "/projects/car-rental.svg",
    behindTheCode: "Created a scalable microservices architecture with .NET Core. Implemented real-time availability tracking, payment processing, and an intuitive admin dashboard.",
    liveUrl: "https://github.com/rivksh",
    githubUrl: "https://github.com/rivksh"
  }
];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
  <section id="projects" className="section py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">
            My Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                  <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-600 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button onClick={() => setOpenIndex(index)} className="btn-primary text-sm">Details</button>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">View demo</a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">Source code</a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {openIndex !== null && (
        <ProjectModal
          open={openIndex !== null}
          onClose={() => setOpenIndex(null)}
          title={projects[openIndex].title}
          description={projects[openIndex].description}
          technologies={projects[openIndex].technologies}
          behindTheCode={`I learned a lot about state architecture and load management. I solved real-time synchronization issues and improved performance.`}
          liveUrl={projects[openIndex].liveUrl}
          githubUrl={projects[openIndex].githubUrl}
        />
      )}
    </section>
  );
};

export default Projects;