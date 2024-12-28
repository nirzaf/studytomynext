"use client";

const images = [
  { title: "Online Tutoring", description: "Live interactive sessions", emoji: "💻" },
  { title: "Group Study", description: "Collaborative learning", emoji: "👥" },
  { title: "Lab Work", description: "Virtual experiments", emoji: "🧪" },
  { title: "Exam Prep", description: "Test preparation", emoji: "📝" },
  { title: "Project Work", description: "Hands-on learning", emoji: "🎯" },
  { title: "Discussion", description: "Interactive learning", emoji: "💭" }
];

const ImageGallery = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Our Learning Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore our learning activities and achievements
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 flex items-center justify-center text-6xl p-8">
                {image.emoji}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {image.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
