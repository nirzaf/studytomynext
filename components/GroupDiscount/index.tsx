"use client";

const benefits = [
  {
    title: "Up to 30% Savings",
    description: "Group bookings of 3 or more students",
    icon: "💰"
  },
  {
    title: "Special Long-term Rates",
    description: "Exclusive discounts on extended bookings",
    icon: "📅"
  },
  {
    title: "Premium Study Materials",
    description: "Access to comprehensive learning resources",
    icon: "📚"
  }
];

const GroupDiscount = () => {
  return (
    <section className="py-20 bg-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Better Together, Better Savings!
          </h2>
          <p className="text-white/80">
            Join with friends to unlock exclusive discounts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-white/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange hover:bg-orange/90 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
            Get Group Discount
          </button>
        </div>
      </div>
    </section>
  );
};

export default GroupDiscount;
