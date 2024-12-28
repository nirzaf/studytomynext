"use client";

const features = [
  {
    title: "Safe & Verified Tutors",
    description: "All tutors are verified with Police Clearance Certificate (PCC)",
    icon: "🛡️"
  },
  {
    title: "1-to-1 Online Tutoring",
    description: "Personalized attention with flexible scheduling",
    icon: "👨‍🏫"
  },
  {
    title: "Private Student Accounts",
    description: "Secure and private learning environment",
    icon: "🔒"
  },
  {
    title: "Customized Timing",
    description: "Schedule sessions at your convenience",
    icon: "⏰"
  },
  {
    title: "Expert Graduate Tutors",
    description: "Learn from experienced educators",
    icon: "🎓"
  },
  {
    title: "Comprehensive Materials",
    description: "Access past papers and revision resources",
    icon: "📚"
  }
];

const WhyUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Why Choose Studytomy?
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Discover the advantages of learning with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
