"use client";

const features = [
  {
    title: "24/7 Support",
    description: "Get help anytime, anywhere",
    icon: "🌐"
  },
  {
    title: "Expert Tutors",
    description: "Learn from qualified professionals",
    icon: "👨‍🏫"
  },
  {
    title: "Pay as You Go",
    description: "Flexible payment options",
    icon: "💳"
  }
];

const DoubtSection = () => {
  return (
    <section className="py-20 bg-orange text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Got Questions? We've Got Answers!
          </h2>
          <p className="text-white/80">
            Instant Doubt Clearing at Your Fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-white/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue hover:bg-blue/90 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
            Ask a Question
          </button>
        </div>
      </div>
    </section>
  );
};

export default DoubtSection;
