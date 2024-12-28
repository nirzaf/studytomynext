"use client";

const subjects = [
  { name: "Biology", icon: "🧬" },
  { name: "Human Biology", icon: "🫀" },
  { name: "Physics", icon: "⚡" },
  { name: "Chemistry", icon: "🧪" },
  { name: "Language", icon: "📚" },
  { name: "Literature", icon: "📖" },
  { name: "Psychology", icon: "🧠" },
  { name: "Mathematics", icon: "📐" },
  { name: "Business Studies", icon: "💼" },
  { name: "Accounting", icon: "📊" },
  { name: "Economics", icon: "📈" },
  { name: "Additional Maths", icon: "🔢" },
  { name: "Computer Science", icon: "💻" },
  { name: "Statistics", icon: "📊" },
  { name: "ICT", icon: "🖥️" },
  { name: "Sociology", icon: "👥" },
];

const Subjects = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-blacksection">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Explore Our Subjects
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Expert tutoring across a wide range of academic subjects
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-3">{subject.icon}</div>
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {subject.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
