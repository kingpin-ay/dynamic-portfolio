import { Code, Database, Server, Layout } from "lucide-react";

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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Skills
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Tech Stack
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <skill.icon
                      className="h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <h3 className="ml-2 text-lg leading-6 font-medium text-gray-900">
                      {skill.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-base text-gray-500">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
