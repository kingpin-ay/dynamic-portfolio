export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-10 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Hi, I'm Your Name</span>
            <span className="block text-indigo-600 dark:text-indigo-400">
              Full Stack Developer
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Turning ideas into reality through code. Passionate about creating
            efficient, scalable, and user-friendly web applications.
          </p>
        </div>
      </div>
    </section>
  );
}
