import SectionTitle from "../components/SectionTitle";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const flagship = [
    {
      title: "PegaHCM",
      role: "Enterprise HR Management System",
      desc: "Streamlined HR operations with an all-in-one platform for attendance, leave, onboarding, and asset management. Empowered managers with real-time dashboards and notifications to boost team productivity.",
      tech: ["React", "Tailwind", "Node", "Prisma", "MySQL"],
      demo: null,
    },
    {
      title: "AI-Powered LMS",
      role: "Learning Management System",
      desc: (
        <>
          Developed a smart education platform with AI-assisted grading and
          multilingual support, helping instructors save time and deliver
          personalized learning experiences.
          <br />
          <em className="text-sm text-gray-400">
            *Note: Deployment and hosting were done personally for demonstration
            only; no client credentials or live data are used.
          </em>
        </>
      ),
      tech: ["React", "Node", "MongoDB", "OpenAI API"],
      demo: null,
    },
  ];

  const collaborations = [
    {
      title: "Fleetbold",
      role: "Admin & Manager Dashboards",
      desc: (
        <>
          Created powerful dashboards to help Fleetbold’s admin and managers
          track vehicles, expenses, and workflows efficiently.
          <br />
          <em className="text-sm text-gray-400">
            *Note: The public fleetbold.com website is separate; our work
            focused on internal dashboards for streamlined operations.
          </em>
        </>
      ),
      tech: ["React", "Tailwind", "Node"],
      demo: "https://fleetbold.com/",
    },
    {
      title: "32beat Writer",
      role: "Live Platform for Writers & Music Fans",
      desc: "Enhanced user experience by building and maintaining critical features like profile editing and seamless navigation, connecting writers with their communities.",
      tech: ["React", "Next.js", "Tailwind", "Node"],
      demo: "https://32beatwriters.com/",
    },
    {
      title: "GoldTrust",
      role: "Feature Development & User Experience",
      desc: "Designed and built secure identity verification flows and improved gold listing management, making it easier for users to invest confidently.",
      tech: ["React", "Node", "Tailwind"],
      demo: null,
    },
    {
      title: "Pareeshay Traders",
      role: "Client E-commerce Website",
      desc: (
        <>
          Developed a responsive and user-friendly e-commerce website using
          WordPress, custom HTML, CSS, and vanilla JavaScript. Delivered smooth
          navigation, clean product listings, and secure checkout functionality
          tailored to client requirements.
          <br />
          <em className="text-sm text-gray-400">
            Live demo at{" "}
            <a
              href="https://pareeshaytraders.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-amber-500"
            >
              https://pareeshaytraders.com/
            </a>
          </em>
        </>
      ),
      tech: ["WordPress", "HTML", "CSS"],
      demo: "https://pareeshaytraders.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <SectionTitle
          title="Projects & Case Studies"
          subtitle="Crafting solutions with impact"
          className="mb-12"
        />
        <div className="w-20 h-1 bg-amber-400 rounded mx-auto mt-2 mb-12" />

        {/* Flagship Projects */}
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
          {flagship.map(({ title, role, desc, tech, demo }) => (
            <article
              key={title}
              className="bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-8 shadow-sm hover:shadow-lg transition-transform duration-300 hover:scale-[1.04] hover:shadow-amber-400/40 flex flex-col"
              tabIndex={0}
              aria-label={`${title} - ${role}`}
            >
              <h3 className="text-2xl font-semibold mb-3 relative cursor-pointer text-amber-600 dark:text-amber-400">
                {title}
                <span className="block w-16 h-1 bg-amber-400 rounded mt-1" />
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 font-medium tracking-wide">
                {role}
              </p>
              <p className="text-base leading-relaxed mb-6 flex-grow">{desc}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold bg-amber-200 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded-full px-3 py-1 select-none"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5 mt-auto">
                {demo ? (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 border border-amber-500 text-amber-600 px-4 py-2 rounded hover:bg-amber-50 dark:hover:bg-amber-900 transition focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1"
                  >
                    View Demo <FaExternalLinkAlt />
                  </a>
                ) : (
                  <span className="italic text-slate-400 dark:text-slate-600 text-sm">
                    Demo / screenshots available on request
                  </span>
                )}

                <button
                  className="ml-auto text-teal-600 dark:text-teal-400 font-semibold hover:underline transition focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-1"
                  aria-label={`Discuss project ${title}`}
                >
                  Discuss this
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Collaborations */}
        <div className="mt-28 border-t border-gray-200 dark:border-slate-700 pt-16">
          <h4 className="text-xl font-semibold mb-3 dark:text-amber-400">
            Past Collaborations
          </h4>
          <div className="w-16 h-1 bg-amber-400 rounded mb-12" />

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
            {collaborations.map(({ title, role, desc, tech, demo }) => (
              <a
                key={title}
                href={demo || "#"}
                target={demo ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-8 shadow-sm hover:shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-amber-400/40 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1"
                tabIndex={0}
                aria-label={`${title} - ${role} (link)`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="text-lg font-semibold flex items-center gap-2 text-amber-600 dark:text-amber-400">
                      <span className="w-3 h-3 bg-amber-400 rounded-full inline-block" />
                      {title}
                    </h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium tracking-wide">
                      {role}
                    </p>
                  </div>
                  {demo && (
                    <FaExternalLinkAlt className="text-amber-600 dark:text-amber-400 opacity-80" />
                  )}
                </div>
                <p className="text-base mt-6 leading-relaxed">{desc}</p>
                <p className="mt-6 text-xs italic text-slate-400 dark:text-slate-600">
                  Tech:{" "}
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="inline-block bg-amber-200 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded-full px-2 py-0.5 mr-2 select-none"
                    >
                      {t}
                    </span>
                  ))}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
