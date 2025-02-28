import TopMainHeadingText from "@/app/_components/common/TopMainHeadingText";
import TopSubHeadingText from "@/app/_components/common/TopSubHeadingText";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <TopSubHeadingText text="Skills" />
        <TopMainHeadingText text="My Tech Stack" />
        <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
          With a passion for technology and problem-solving, I've embarked on an
          exciting journey in the world of web development. From my first
          "Hello, World!" to building complex full-stack applications, every
          step has been a learning experience.
        </p>
      </div>
      <div className="mt-10 lg:text-center">
        <p className="text-lg text-gray-500 dark:text-gray-400">
          I started my career as a front-end developer, fascinated by the
          ability to bring designs to life. As I delved deeper into the field, I
          discovered my love for back-end technologies and databases, which led
          me to become a full-stack developer.
        </p>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Today, I specialize in building robust web applications using modern
          technologies like Next.js, Nest.js, and PostgreSQL. I'm always eager
          to learn new technologies and best practices to create efficient,
          scalable, and user-friendly solutions.
        </p>
      </div>
    </div>
  );
}
