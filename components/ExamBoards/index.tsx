"use client";

const examBoards = [
  { name: "Edexcel", logo: "📚" },
  { name: "Cambridge", logo: "🎓" },
  { name: "AQA", logo: "📝" },
  { name: "OCR", logo: "✏️" },
  { name: "IB", logo: "🌍" },
  { name: "OSSD", logo: "🎯" },
  { name: "VCE", logo: "📖" }
];

const ExamBoards = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-blacksection">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Exam Boards We Cover
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Expert tutoring for all major examination boards
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {examBoards.map((board, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center"
            >
              <div className="text-4xl mb-3">{board.logo}</div>
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {board.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange hover:bg-blue text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
            View All Exam Boards
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExamBoards;
