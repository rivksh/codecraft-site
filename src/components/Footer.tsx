import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white dark:bg-gray-900 mt-12 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="font-bold">Rivka Schreiber</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Full Stack Software Developer — finding simple ways to solve complex problems</div>
          </div>

          <div className="flex items-center gap-6">
            <a className="text-gray-600 dark:text-gray-300 hover:text-primary" href="https://github.com/rivksh" target="_blank" rel="noreferrer">GitHub</a>
            <a className="text-gray-600 dark:text-gray-300 hover:text-primary" href="https://linkedin.com/in/rivka" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="text-gray-600 dark:text-gray-300 hover:text-primary" href="mailto:rivsh2005@gmail.com">rivsh2005@gmail.com</a>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
