import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="font-sans bg-neutral-100 text-gray-900">
      <Navbar />

      {/* HOME */}
      <section id="home" className="min-h-screen pt-24 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold">Hi, I’m Anna McLean</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          UX designer, frontend developer, and creative strategist focused on building thoughtful, intuitive digital experiences. I'm passionate about turning complex problems into elegant solutions that serve people — and scale with purpose.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="min-h-screen pt-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            With a background in UX design, frontend development, and marketing, I thrive at the intersection of function and feeling. I’ve led design for platforms used by 70,000+ students, built apps from concept to launch, and collaborated cross-functionally to improve usability at scale. Whether I'm prototyping in Figma or building in React, I’m all about systems that are as intuitive as they are impactful.
          </p>
        </div>
      </section>

      
      {/* PROJECTS */}
      <section id="projects" className="min-h-screen pt-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen pt-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-6">
            Looking to collaborate, chat UX, or bring an idea to life? I’d love to hear from you.
          </p>
          <a href="mailto:4amclean@gmail.com" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition">
            Send an Email
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
