export default function Skills() {
  const skillCategories = {
    Frontend: ["React.js", "TailwindCSS", "Bootstrap", "ShadCN UI"],
    Backend: ["Node.js", "Express.js", "Prisma ORM"],
    Database: ["MongoDB", "MySQL"],
    Tools: ["Git", "GitHub", "Postman", "Socket.io", "Next.js", "Clerk"],
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Skills</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div
            key={category}
            className="bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-300">
              {category}
            </h3>
            <ul className="space-y-2">
              {skills.map((skill) => (
                <li key={skill} className="text-gray-300">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
