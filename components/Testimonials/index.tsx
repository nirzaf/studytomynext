"use client";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "IGCSE Student",
    content: "The personalized attention and flexible scheduling helped me achieve an A* in Mathematics. Highly recommended!",
    image: "🎓"
  },
  {
    name: "David Chen",
    role: "IB Student",
    content: "Expert tutors who really understand the IB curriculum. My grades improved significantly after joining.",
    image: "📚"
  },
  {
    name: "Emma Williams",
    role: "Parent",
    content: "The safety verification and professional approach gave us great confidence. My daughter loves her tutoring sessions.",
    image: "👨‍👧"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-blacksection">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Hear from our satisfied students and parents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{testimonial.image}</div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
