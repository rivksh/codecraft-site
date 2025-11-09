import React from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  technologies: string[];
  behindTheCode?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectModal: React.FC<Props> = ({ open, onClose, title, description, technologies, behindTheCode, liveUrl, githubUrl }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative bg-white dark:bg-gray-900 rounded-xl w-full max-w-3xl p-6 shadow-2xl z-10">
        <button onClick={onClose} aria-label="close" className="absolute top-4 right-4 p-2">✕</button>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

        <div className="mb-4">
          <strong>Technologies:</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((t, i) => (
              <span key={i} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>

        {behindTheCode && (
          <div className="mb-4">
            <strong>Behind the code</strong>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{behindTheCode}</p>
          </div>
        )}

        <div className="flex gap-3 mt-4">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="btn-primary">View demo</a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">Source code</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
