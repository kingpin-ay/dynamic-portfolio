import TopMainHeadingText from "@/app/_components/common/TopMainHeadingText";
import TopSubHeadingText from "@/app/_components/common/TopSubHeadingText";

interface TestimonialsProps {
  testimonial: {
    name: string;
    role: string;
    content: string;
  };
}

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <TopSubHeadingText text="Testimonials" />
        <TopMainHeadingText text="What People Say" />
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialBlock key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialBlock({ testimonial }: TestimonialsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg transition-colors duration-200">
      <div className="px-4 py-5 sm:p-6">
        <p className="text-base text-gray-500 dark:text-gray-400">
          "{testimonial.content}"
        </p>
        <div className="mt-6">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {testimonial.name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}
