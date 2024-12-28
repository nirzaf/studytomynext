"use client";

const achievements = [
  {
    title: "A* in Mathematics",
    student: "John Smith",
    board: "Cambridge IGCSE",
    year: "2023",
    emoji: "🏆"
  },
  {
    title: "7 in Physics HL",
    student: "Maria Garcia",
    board: "IB Diploma",
    year: "2023",
    emoji: "🌟"
  },
  {
    title: "A in Chemistry",
    student: "Alex Wong",
    board: "Edexcel",
    year: "2023",
    emoji: "🎯"
  }
];

const Achievement = () => {
  return (
    <section className="py-20 bg-orange text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Student Achievements
          </h2>
          <p className="text-white/80">
            Celebrating our students' success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{achievement.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">
                {achievement.title}
              </h3>
              <p className="text-white/80 mb-1">
                {achievement.student}
              </p>
              <p className="text-white/60 text-sm">
                {achievement.board} • {achievement.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
