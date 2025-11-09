import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Playground: React.FC = () => {
  const [color1, setColor1] = useState('#3B82F6');
  const [color2, setColor2] = useState('#8B5CF6');
  const [angle, setAngle] = useState(45);
  const [shape, setShape] = useState<'square' | 'circle' | 'polygon'>('square');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('he-IL', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const shapes = {
    square: 'rounded-xl',
    circle: 'rounded-full',
    polygon: 'polygon'
  };

  return (
    <section id="playground" className="section py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-heading text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Interactive Playground
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Explore these interactive demos showcasing some of my frontend development capabilities. Feel free to play around with the controls!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary dark:text-primary-light">Gradient Generator</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">Create beautiful gradients with custom colors, angle, and shapes.</p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Color 1:</label>
                  <input 
                    type="color" 
                    value={color1} 
                    onChange={e => setColor1(e.target.value)} 
                    className="w-16 h-8 rounded cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Color 2:</label>
                  <input 
                    type="color" 
                    value={color2} 
                    onChange={e => setColor2(e.target.value)} 
                    className="w-16 h-8 rounded cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Angle: {angle}°
                </label>
                <input 
                  type="range" 
                  min={0} 
                  max={360} 
                  value={angle} 
                  onChange={e => setAngle(Number(e.target.value))}
                  className="w-full accent-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Shape:</label>
                <div className="flex gap-2">
                  {(['square', 'circle', 'polygon'] as const).map(s => (
                    <button
                      key={s}
                      onClick={() => setShape(s)}
                      className={`px-4 py-2 rounded ${
                        shape === s 
                          ? 'bg-accent text-white' 
                          : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <motion.div 
              className={`mt-6 mx-auto ${shapes[shape]}`}
              style={{ 
                background: `linear-gradient(${angle}deg, ${color1}, ${color2})`,
                width: 200,
                height: 200,
                clipPath: shape === 'polygon' ? 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' : undefined
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />

            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded text-sm font-mono">
              background: linear-gradient({angle}deg, {color1}, {color2});
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary dark:text-primary-light">Real-time Clock & Progress</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">A demo of real-time updates and smooth animations.</p>

            <div className="text-center mb-8">
              <div className="text-4xl font-mono mb-2">{formatTime(currentTime)}</div>
              <div className="text-sm text-gray-500">{currentTime.toLocaleDateString('he-IL')}</div>
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-4 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-accent to-accent-light"
                  style={{ width: '75%' }}
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                />
              </div>
              
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm"
                  >
                    75% Complete
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-3">Current Projects:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Collaborative Editor (75%)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>AI Integration (45%)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Mobile App (30%)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Playground;
