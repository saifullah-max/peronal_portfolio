export default function Experience() {
  const experiences = [
    {
      company: "Pegasync",
      role: "Software Engineer Intern",
      period: "July 2025 – Present",
      highlights: [
        "PegaHCM: Led development of attendance & leave modules, role-based dashboards, and analytics visualizations.",
        "Implemented CRUD operations, RBAC, onboarding/resignation workflows, asset & expense modules.",
        "Integrated Socket.io for real-time notifications and improved UX with responsive layouts.",
        "Fleetbold: Developed vehicle CRUD forms, reservation features, and expense OCR upload.",
        "Collaborated in Agile environment delivering API integrations, UI enhancements, and bug fixes.",
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8 text-blue-400">Experience</h2>
      {experiences.map((exp) => (
        <div
          key={exp.company}
          className="bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition mb-6"
        >
          <h3 className="text-2xl font-semibold">{exp.company}</h3>
          <p className="text-sm text-blue-300 mb-2">
            {exp.role} | {exp.period}
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {exp.highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
