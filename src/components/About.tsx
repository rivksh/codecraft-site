import { motion } from 'framer-motion';

const About = () => {
  return (
  <section id="about" aria-labelledby="about-heading" className="section py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            id="about-heading"
            className="text-3xl md:text-4xl font-heading text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <motion.div 
              className="md:col-span-2 space-y-6 text-lg text-gray-700 dark:text-gray-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-semibold text-xl text-primary dark:text-primary-light">Profile</h3>
              <p className="leading-relaxed">
                Full Stack Software Developer with hands-on experience building scalable, production-ready web applications using React, TypeScript, and Node.js. Skilled in developing client and server features, integrating external APIs (Zoom, Google Calendar, LinkedIn), and managing databases. Fast learner, detail-oriented, and passionate about delivering clean, efficient, and maintainable code. Strong communicator with a collaborative mindset, eager to contribute and grow in dynamic development teams.
              </p>

              <h3 className="font-semibold text-xl text-primary dark:text-primary-light mt-6">Professional Experience</h3>
              <motion.div 
                className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-xl">DiversiTech — Full Stack Developer</div>
                    <div className="text-sm text-accent">2025 • Project: legalcore.pages.dev</div>
                  </div>
                  <div className="text-sm bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">Israel</div>
                </div>
                <ul className="mt-3 list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                  <li>Developed responsive React + TypeScript components with Tailwind CSS.</li>
                  <li>Built and maintained Node.js REST APIs and PostgreSQL (Supabase) schemas.</li>
                  <li>Integrated Zoom meetings, Google Calendar synchronization, and LinkedIn login.</li>
                  <li>Delivered 5+ full features from PRD to production; improved API performance by 25%.</li>
                  </ul>
                </motion.div>

              <h3 className="font-semibold text-xl text-primary dark:text-primary-light mt-6">Selected Projects</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                {[
                  {
                    title: "Bookkeeping System",
                    tech: "Node.js, TypeScript, MongoDB",
                    desc: "Income & expense management app with PDF reporting."
                  },
                  {
                    title: "PalettePro",
                    tech: "Angular, Node.js",
                    desc: "Designer platform for creating and sharing color palettes."
                  },
                  {
                    title: "Car Rental Subscription Site",
                    tech: "C#.NET, React",
                    desc: "User subscriptions and admin dashboard."
                  }
                ].map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * index }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="font-bold text-primary dark:text-primary-light">{project.title}</div>
                    <div className="text-accent">{project.tech}</div>
                    <div className="mt-1">{project.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.aside 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm"
                whileHover={{ y: -2 }}
              >
                <h4 className="font-bold text-primary dark:text-primary-light">Contact</h4>
                <div className="space-y-2 mt-3">
                  <p className="text-sm font-medium">Rivka Schreiber</p>
                  <p className="text-sm text-accent">Full Stack Software Developer</p>
                  <p className="text-sm flex items-center gap-2">
                    <span role="img" aria-label="phone">📞</span> 
                    <a href="tel:+972534169661" className="hover:text-accent">+972 53-416-9661</a>
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <span role="img" aria-label="email">📧</span>
                    <a href="mailto:rivsh2005@gmail.com" className="hover:text-accent">rivsh2005@gmail.com</a>
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <span role="img" aria-label="github">🌐</span>
                    <a href="https://github.com/rivksh" target="_blank" rel="noopener noreferrer" className="hover:text-accent">github.com/rivksh</a>
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <span role="img" aria-label="location">📍</span>
                    <span>Israel</span>
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm"
                whileHover={{ y: -2 }}
              >
                <h4 className="font-bold text-primary dark:text-primary-light">Technical Skills</h4>
                <ul className="text-sm mt-3 space-y-2">
                  <li>
                    <strong className="text-accent">Languages:</strong>
                    <div className="mt-1">TypeScript, JavaScript, Python, C, C++, C#, Java, SQL, Assembly</div>
                  </li>
                  <li>
                    <strong className="text-accent">Frontend:</strong>
                    <div className="mt-1">React, Angular, HTML5, CSS3, Tailwind, Bootstrap</div>
                  </li>
                  <li>
                    <strong className="text-accent">Backend:</strong>
                    <div className="mt-1">Node.js, REST APIs, Entity Framework</div>
                  </li>
                  <li>
                    <strong className="text-accent">Databases:</strong>
                    <div className="mt-1">PostgreSQL (Supabase), MongoDB, SQL Server</div>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm"
                whileHover={{ y: -2 }}
              >
                <h4 className="font-bold text-primary dark:text-primary-light">Education</h4>
                <div className="mt-3">
                  <div className="text-accent font-medium">Mahat – Gur Seminary</div>
                  <div className="text-sm">Software Engineering Associate (2023–2025)</div>
                  <div className="text-sm text-primary dark:text-primary-light mt-1">Graduated with honors</div>
                </div>
              </motion.div>
            </motion.aside>
          </div>

          <div className="mt-8 text-center">
            <a href="/Rivka-CV.pdf" className="btn-primary mr-4" download aria-label="Download Rivka Schreiber CV (PDF)">Download CV (PDF)</a>
            <a href="#contact" className="btn-secondary">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;