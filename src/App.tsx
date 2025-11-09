// React import not required with new JSX transform
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Playground from './components/Playground';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Header />
      <main id="main" className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Playground />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;