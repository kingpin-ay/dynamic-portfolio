import TopMainHeadingText from "@/app/_components/common/TopMainHeadingText";
import TopSubHeadingText from "@/app/_components/common/TopSubHeadingText";
import { Code, Database, Server, Layout, LucideProps } from "lucide-react";

interface SkillBlockProps {
  skill: {
    name: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    description: string;
  };
}

const skills = [
  {
    name: "Front-end",
    icon: Layout,
    description: "Next.js, React, Tailwind CSS, TypeScript",
  },
  {
    name: "Back-end",
    icon: Server,
    description: "Nest.js, Node.js, Express.js",
  },
  {
    name: "Databases",
    icon: Database,
    description: "PostgreSQL, MongoDB, Redis",
  },
  { name: "DevOps", icon: Code, description: "Docker, CI/CD, AWS" },
];

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <TopSubHeadingText text="Skills" />
        <TopMainHeadingText text="My Tech Stack" />
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <SkillBlock skill={skill} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillBlock({ skill }: SkillBlockProps) {
  return (
    <div
      key={skill.name}
      className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg transition-colors duration-200"
    >
      <div className="p-5">
        <div className="flex items-center">
          <skill.icon
            className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
            aria-hidden="true"
          />
          <h3 className="ml-2 text-lg leading-6 font-medium text-gray-900 dark:text-white">
            {skill.name}
          </h3>
        </div>
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
          {skill.description}
        </p>
      </div>
    </div>
  );
}
