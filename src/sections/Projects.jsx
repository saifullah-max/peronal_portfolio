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
          Developed a smart education platform with AI-assisted grading and multilingual support, helping instructors save time and deliver personalized learning experiences.
          <br />
          <em className="text-sm text-gray-400">
            *Note: Deployment and hosting were done personally for demonstration only; no client credentials or live data are used.
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
          Created powerful dashboards to help Fleetbold’s admin and managers track vehicles, expenses, and workflows efficiently.
          <br />
          <em className="text-sm text-gray-400">
            *Note: The public fleetbold.com website is separate; our work focused on internal dashboards for streamlined operations.
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
          Developed a responsive and user-friendly e-commerce website using WordPress, custom HTML, CSS, and vanilla JavaScript. Delivered smooth navigation, clean product listings, and secure checkout functionality tailored to client requirements.
          <br />
          <em className="text-sm text-gray-400">
            Live demo at{" "}
            <a
              href="https://pareeshaytraders.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#00ffe7]"
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
      className="relative py-20 px-6 max-w-7xl mx-auto bg-gradient-to-br from-[#001a26] to-[#000a12] rounded-lg shadow-[inset_0_0_80px_#00ffe7aa]"
      aria-label="Projects and Case Studies"
    >
      <SectionTitle
        title="Projects & Case Studies"
        subtitle="Crafting solutions with impact"
      />

      <div className="w-24 h-1 bg-[#00ffe7] rounded mx-auto mt-4 mb-14 shadow-neon" />

      {/* Flagship Projects */}
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
        {flagship.map(({ title, role, desc, tech, demo }) => (
          <article
            key={title}
            tabIndex={0}
            aria-label={`${title} - ${role}`}
            className="bg-[#042f44cc] backdrop-blur-md border border-[#00ffe7] rounded-2xl p-8 shadow-neon hover:shadow-neon-lg transition-transform duration-300 hover:scale-[1.04] flex flex-col"
          >
            <h3 className="text-3xl font-extrabold mb-4 text-[#00ffe7] tracking-wide cursor-default relative">
              {title}
              <span className="block w-20 h-1 bg-[#00ffe7] rounded mt-2 shadow-neon" />
            </h3>

            <p className="text-sm text-[#66f2ffcc] mb-6 font-semibold tracking-wide">
              {role}
            </p>

            <p className="flex-grow text-[#b0eaffcc] leading-relaxed text-base">{desc}</p>

            <div className="flex flex-wrap gap-3 mt-8 mb-10">
              {tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold bg-[#00ffe722] text-[#00ffe7] rounded-full px-3 py-1 select-none tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-auto">
              {demo ? (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 border border-[#00ffe7] text-[#00ffe7] px-5 py-2 rounded-full hover:bg-[#00ffe722] transition focus:outline-none focus:ring-2 focus:ring-[#00ffe7] focus:ring-offset-1"
                >
                  View Demo <FaExternalLinkAlt />
                </a>
              ) : (
                <span className="italic text-[#0099aa99] text-sm">
                  Demo / screenshots available on request
                </span>
              )}

              <button
                className="ml-auto text-[#00ffe7] font-semibold hover:underline transition focus:outline-none focus:ring-2 focus:ring-[#00ffe7] focus:ring-offset-1"
                aria-label={`Discuss project ${title}`}
              >
                Discuss this
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Collaborations */}
      <section className="mt-28 border-t border-[#00ffe7] pt-16">
        <h4 className="text-2xl font-bold mb-4 text-[#ff8c00] tracking-wide">
          Past Collaborations
        </h4>
        <div className="w-20 h-1 bg-[#ff8c00] rounded mb-14 shadow-neon" />

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {collaborations.map(({ title, role, desc, tech, demo }) => (
            <a
              key={title}
              href={demo || "#"}
              target={demo ? "_blank" : undefined}
              rel="noopener noreferrer"
              tabIndex={0}
              aria-label={`${title} - ${role} (link)`}
              className="block bg-[#1c2a37cc] backdrop-blur-md border border-[#ff8c00] rounded-2xl p-8 shadow-neon hover:shadow-neon-lg transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#ff8c00] focus:ring-offset-1"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h5 className="text-xl font-bold flex items-center gap-3 text-[#ff8c00] tracking-wide">
                    <span className="w-4 h-4 bg-[#ff8c00] rounded-full inline-block shadow-neon" />
                    {title}
                  </h5>
                  <p className="text-sm text-[#ffb55ccc] mt-1 font-semibold tracking-wide">
                    {role}
                  </p>
                </div>
                {demo && (
                  <FaExternalLinkAlt
                    className="text-[#ff8c00] opacity-90"
                    size={18}
                  />
                )}
              </div>
              <p className="text-[#ffb55caa] mt-6 leading-relaxed text-base tracking-wide">
                {desc}
              </p>
              <p className="mt-6 text-xs italic text-[#a9731e99]">
                Tech:{" "}
                {tech.map((t) => (
                  <span
                    key={t}
                    className="inline-block bg-[#ff8c0033] text-[#ff8c00] rounded-full px-3 py-1 mr-2 select-none tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </p>
            </a>
          ))}
        </div>
      </section>

      <style jsx>{`
        .shadow-neon {
          box-shadow:
            0 0 6px #00ffe7aa,
            0 0 15px #00ffe7cc,
            0 0 25px #00ffe7ff;
        }
        .shadow-neon-lg {
          box-shadow:
            0 0 18px #00ffe7ee,
            0 0 35px #00ffe7ff,
            0 0 55px #00ffe7ff;
        }
      `}</style>
    </section>
  );
}
