import TopMainHeadingText from "@/app/_components/common/TopMainHeadingText";
import TopSubHeadingText from "@/app/_components/common/TopSubHeadingText";

interface ExperienceProps {
  company: string;
  position: string;
  duration: string;
  description: string;
}

interface ExperienceVerticalBlockProps {
  experience: ExperienceProps;
  index: number;
  totalNumberOfExperiences: number;
}

interface ExperienceVerticalProps {
  experiences: ExperienceProps[];
}

const experiences = [
  {
    company: "Tech Company A",
    position: "Senior Full Stack Developer",
    duration: "Jan 2021 - Present",
    description:
      "Led development of multiple web applications using Next.js and Nest.js.",
  },
  {
    company: "Tech Startup B",
    position: "Full Stack Developer",
    duration: "Jun 2018 - Dec 2020",
    description:
      "Developed and maintained various features for the company's main product.",
  },
  {
    company: "Web Agency C",
    position: "Junior Web Developer",
    duration: "Jan 2017 - May 2018",
    description:
      "Worked on client projects, primarily focusing on front-end development.",
  },
];

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <TopSubHeadingText text="Experience" />
        <TopMainHeadingText text="My Professional Journey" />
      </div>
      <div className="mt-10">
        <ExperienceVerticalJourneyComponent experiences={experiences} />
      </div>
    </div>
  );
}

function ExperienceVerticalJourneyComponent({
  experiences,
}: ExperienceVerticalProps) {
  return (
    <div className="space-y-10">
      {experiences.map((exp, index) => (
        <ExperienceVerticalBlock
          experience={exp}
          index={index}
          key={index}
          totalNumberOfExperiences={experiences.length}
        />
      ))}
    </div>
  );
}

function ExperienceVerticalBlock({
  experience: exp,
  index,
  totalNumberOfExperiences,
}: ExperienceVerticalBlockProps) {
  return (
    <div className="relative">
      {index !== totalNumberOfExperiences - 1 && (
        <div
          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"
          aria-hidden="true"
        ></div>
      )}
      <div className="relative flex items-start bg-white dark:bg-gray-800 shadow rounded-lg p-5 transition-colors duration-200">
        <span className="h-9 flex items-center">
          <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 dark:bg-indigo-500 rounded-full">
            <svg
              className="w-5 h-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </span>
        <div className="min-w-0 flex-1 ml-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {exp.position}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {exp.company}
          </p>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            {exp.description}
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {exp.duration}
          </p>
        </div>
      </div>
    </div>
  );
}
