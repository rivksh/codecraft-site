import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    { title: 'How I built a management system with React & Supabase', date: '2025-08-01' },
    { title: '5 lessons from my first team project', date: '2025-05-20' },
    { title: 'Writing maintainable code: my approach', date: '2025-03-12' },
  ];

  return (
  <section id="blog" className="section py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
  <h2 className="section-header">Blog & Insights</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={i} className="project-card p-6">
              <h3 className="font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{p.date}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Short summary to entice the reader to open the post.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
