import React, { useEffect, useRef } from 'react';
import FocusTrap from 'focus-trap-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  technologies: string[];
  behindTheCode?: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  status?: 'completed' | 'in-progress' | 'planned';
  completion?: number;
}

const ProjectModal: React.FC<Props> = ({
  open,
  onClose,
  title,
  description,
  technologies,
  behindTheCode,
  liveUrl,
  githubUrl,
  image,
  status = 'completed',
  completion = 100,
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  // Render controlled by AnimatePresence below; keep hooks stable across renders.

  const statusColors: Record<string, string> = {
    completed: 'bg-green-500',
    'in-progress': 'bg-yellow-500',
    planned: 'bg-blue-500',
  };

  const statusText: Record<string, string> = {
    completed: 'Completed',
    'in-progress': 'In Progress',
    planned: 'Planned',
  };

  const modalRef = useRef<HTMLDivElement | null>(null);

  // Mark background siblings as aria-hidden for screen readers while modal is open.
  useEffect(() => {
    if (!open) return;
    const node = modalRef.current;
    if (!node) return;

    const root = document.getElementById('root');
    const hiddenNodes: Element[] = [];
    if (root) {
      Array.from(root.children).forEach((child) => {
        if (child === node) return;
        if (!child.hasAttribute('aria-hidden')) {
          hiddenNodes.push(child);
          child.setAttribute('aria-hidden', 'true');
        }
      });
    }

    return () => {
      hiddenNodes.forEach(n => n.removeAttribute('aria-hidden'));
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            data-testid="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <FocusTrap
            active={open}
            focusTrapOptions={{
              clickOutsideDeactivates: true,
              escapeDeactivates: false,
              returnFocusOnDeactivate: true,
            }}
          >
          <motion.div
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal="true"
            className="relative bg-white dark:bg-gray-900 rounded-xl w-full max-w-4xl shadow-2xl z-10 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.45 }}
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
          >
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {image && (
              <div className="relative h-64 md:h-80 bg-gray-100 dark:bg-gray-800">
                <img src={image} alt={`${title} preview`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <motion.h3
                  id="modal-title"
                  className="absolute bottom-0 left-0 right-0 text-3xl font-bold text-white p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {title}
                </motion.h3>
              </div>
            )}

            <div className="p-6 space-y-6">
              {!image && (
                <motion.h3 id="modal-title" className="text-3xl font-bold mb-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  {title}
                </motion.h3>
              )}

              <div className="flex items-center gap-4 text-sm">
                <span className={`px-3 py-1 rounded-full text-white ${statusColors[status]}`}>{statusText[status]}</span>
                {status === 'in-progress' && (
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-28 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-yellow-500" initial={{ width: 0 }} animate={{ width: `${completion}%` }} transition={{ duration: 0.8 }} />
                    </div>
                    <span>{completion}%</span>
                  </div>
                )}
              </div>

              <motion.p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                {description}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
                <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <motion.span key={tech} className="tech-tag" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.05 + i * 0.04 }} whileHover={{ scale: 1.05 }}>
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {behindTheCode && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
                  <h4 className="text-lg font-semibold mb-3">Behind the Code:</h4>
                  <p className="text-gray-600 dark:text-gray-300">{behindTheCode}</p>
                </motion.div>
              )}

              <motion.div className="flex flex-wrap gap-4 pt-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                {liveUrl && (
                  <a href={liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Live Demo
                  </a>
                )}

                {githubUrl && (
                  <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-accent hover:text-accent rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    View Source
                  </a>
                )}
              </motion.div>
            </div>
          </motion.div>
            </FocusTrap>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
