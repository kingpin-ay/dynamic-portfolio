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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Experience
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Professional Journey
          </p>
        </div>
        <div className="mt-10">
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {index !== experiences.length - 1 && (
                  <div
                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></div>
                )}
                <div className="relative flex items-start">
                  <span className="h-9 flex items-center">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full">
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
                  <div className="min-w-0 flex-1 ml-4 pt-1.5">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {exp.position}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>{exp.description}</p>
                    </div>
                    <div className="mt-1 text-sm text-gray-500">
                      <p>{exp.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
