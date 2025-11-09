import React, { useState } from 'react';

const Playground: React.FC = () => {
  const [color, setColor] = useState('#06B6D4');
  const [size, setSize] = useState(120);

  return (
    <section id="playground" className="section py-20">
      <div className="container mx-auto px-4">
  <h2 className="section-header">Playground — Mini Demos</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="project-card p-6">
            <h3 className="font-bold mb-2">Color Mixer</h3>
            <p className="mb-4">Pick a color and size to see the result in real time — a small interactive demo.</p>

            <label className="block mb-2">
              Choose color:
              <input type="color" value={color} onChange={e => setColor(e.target.value)} className="ml-2" />
            </label>

            <label className="block mb-4">
              Size (px):
              <input type="range" min={40} max={320} value={size} onChange={e => setSize(Number(e.target.value))} className="w-full" />
            </label>

            <div style={{ background: color, width: size, height: size, borderRadius: 12 }} className="mx-auto" />
          </div>

          <div className="project-card p-6">
            <h3 className="font-bold mb-2">Currently Building</h3>
            <p className="mb-4">What I'm building right now — shows a progress bar and short context.</p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded">
              <div style={{ width: '45%', background: 'rgb(59,130,246)' }} className="h-3 rounded" />
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Building a collaborative editor (45%)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playground;
