const testimonials = [
  {
    name: "John Doe",
    role: "CTO at Tech Company",
    content:
      "An exceptional developer who consistently delivers high-quality work. Their expertise in full-stack development has been invaluable to our projects.",
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    content:
      "Working with this developer has been a pleasure. They're not only skilled but also great at communication and meeting deadlines.",
  },
  {
    name: "Alex Johnson",
    role: "Freelance Client",
    content:
      "I'm impressed by their ability to turn complex ideas into user-friendly applications. They're my go-to developer for all my web projects.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What People Say
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-base text-gray-500">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-6">
                    <p className="text-sm font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
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
