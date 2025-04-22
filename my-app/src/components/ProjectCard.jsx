import { motion } from "framer-motion";
import { useState } from "react";
import spotonImage from "../assets/spotonPort.png";
import excImage from "../assets/excapp.png";
import myucfImage from "../assets/myucf.png";

export const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email format";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 border rounded-xl"
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-3 border rounded-xl"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        className="w-full p-3 border rounded-xl h-32"
      />
      {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition"
      >
        Send Message
      </button>
    </form>
  );
};

const projects = [
  {
    title: "SpotOn App",
    subtitle: "Senior Design Project",
    description:
      "A full-stack mobile app designed to help students find and attend local campus events. I led the design system in Figma, collaborated on the backend logic, and implemented real-time messaging and user search with MySQL, Socket.IO, and Expo.",
    image: spotonImage,
    tags: ["Figma", "Socket.IO", "MySQL", "Expo"],
    link: "https://www.figma.com/deck/uKde8zrxVjl3K6ZnvJE3Mr/SPOTON-Presentation--Copy-?node-id=2160-159&viewport=-109%2C-4%2C0.52&t=qsj8xVCJ7xAZ5zK9-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    title: "React Exercise App",
    subtitle: "Mobile Fitness Tracker",
    description:
      "Tracks your reps and time for activities like running, situps, swimming, and pushups. Built using React Native with navigation stacks and activity timers.",
    image: excImage,
    tags: ["React Native", "Timers", "State Management", "Mobile UI"],
    link: "https://amclean4.github.io/updated-exercise-app/",
  },
  {
    title: "myUCF Mobile Redesign",
    subtitle: "UX/UI Internship",
    description:
      "Redesigned the myUCF mobile app to enhance usability and accessibility. Led user research, wireframing, and prototyping in Figma, resulting in a deployed solution now used by 70,000+ students.",
    image: myucfImage,
    tags: ["UX Research", "Figma", "Accessibility", "Mobile Redesign"],
    link: "https://www.linkedin.com/posts/anna-mclean100_opentowork-uxdesign-uxconsultant-activity-7301359643316965377-Bymv/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC9J5fABR8QjCaChQvwWguqBKKe5_hGvHDI",
  }
];

const ProjectCard = () => {
  return (
    <>
      {projects.map((project, index) => (
        <motion.a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group bg-purple-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-purple-300 hover:border-purple-400 flex flex-col gap-4"
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-2/3 h-40 mx-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-[1.03]"
            />
          )}
          <div className="flex flex-col flex-1">
            <h3 className="text-2xl font-bold text-purple-700">{project.title}</h3>
            {project.subtitle && <p className="italic text-sm text-gray-700">{project.subtitle}</p>}
            <div className="flex flex-wrap gap-2 text-sm mt-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-700 text-sm mt-3 flex-1">{project.description}</p>
            <span className="text-purple-600 font-medium group-hover:underline mt-4">
              View Project →
            </span>
          </div>
        </motion.a>
      ))}
    </>
  );
};

export default ProjectCard;
