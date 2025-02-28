import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import TopMainHeadingText from "@/app/_components/common/TopMainHeadingText";
import TopSubHeadingText from "@/app/_components/common/TopSubHeadingText";

const projects = [
  {
    name: "Project 1",
    description: "A brief description of Project 1",
    image: "https://placehold.co/400x300",
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
  },
  {
    name: "Project 2",
    description: "A brief description of Project 2",
    image: "https://placehold.co/400x300",
    github: "https://github.com/yourusername/project2",
    demo: "https://project2-demo.com",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <TopSubHeadingText text="Projects" />
        <TopMainHeadingText text="My Recent Work" />
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectBlock project={project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProjectProps {
  project: {
    name: string;
    description: string;
    image: string;
    github: string;
    demo: string;
  };
}

function ProjectBlock({ project }: ProjectProps) {
  return (
    <div
      key={project.name}
      className="bg-gray-50 dark:bg-gray-800 overflow-hidden shadow rounded-lg transition-colors duration-200"
    >
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          {project.name}
        </h3>
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
          {project.description}
        </p>
        <div className="mt-4 flex space-x-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transition-colors duration-200"
          >
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 transition-colors duration-200"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
