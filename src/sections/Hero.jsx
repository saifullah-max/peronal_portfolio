import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <>
      {/* Neon cyan divider below navbar */}
      <div className="w-24 h-1 bg-[#00ffe7] rounded mx-auto mt-4 mb-12 shadow-neon" />

      <section
        id="hero"
        className="min-h-[90vh] flex items-center bg-gradient-to-b from-[#001f27] via-[#003743] to-[#001f27] py-24 px-6 sm:px-12"
        aria-label="Hero section"
      >
        <div className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm sm:text-base font-semibold text-[#00ffe7] tracking-widest uppercase mb-6 select-none">
              Innovate • Build • Scale
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-neon">
              Crafting <span className="text-amber-400">bold</span>,{" "}
              <span className="text-[#00ffe7]">impactful</span> digital
              experiences.
            </h1>

            <p className="mt-8 text-gray-300 max-w-xl text-lg leading-relaxed tracking-wide">
              From startups to enterprises, we design & develop
              next-level apps and dashboards with speed, precision, and a
              relentless focus on what matters — your success.
            </p>

            <div className="mt-12 flex gap-6 flex-wrap max-w-xs sm:max-w-none">
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-80}
                duration={600}
                className="inline-block px-8 py-3 bg-amber-400 text-slate-900 font-bold rounded-lg cursor-pointer
                  shadow-lg hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-400
                  transition-all select-none"
                role="button"
                tabIndex={0}
                aria-label="Get a free quote"
              >
                Get a Free Quote
              </ScrollLink>

              <ScrollLink
                to="projects"
                smooth={true}
                offset={-80}
                duration={600}
                className="inline-block px-8 py-3 border-2 border-[#00ffe7] text-[#00ffe7] rounded-lg cursor-pointer
                  hover:bg-[#00ffe7] hover:text-slate-900 focus:outline-none focus:ring-4 focus:ring-[#00ffe7]
                  transition-all select-none"
                role="button"
                tabIndex={0}
                aria-label="View our work"
              >
                View Our Work
              </ScrollLink>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-gray-400 text-sm font-mono tracking-wide select-none">
              <li className="flex items-center gap-2">
                <span className="block w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                Lightning-fast delivery
              </li>
              <li className="flex items-center gap-2">
                <span className="block w-3 h-3 rounded-full bg-[#00ffe7] animate-pulse" />
                Crystal clear communication
              </li>
              <li className="flex items-center gap-2">
                <span className="block w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                NDA & confidentiality guaranteed
              </li>
            </ul>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-[#002a38] rounded-3xl p-10 max-w-md mx-auto border border-[#00ffe7] shadow-neon-lg">
              <div className="flex items-center gap-5">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-400 to-[#00ffe7] flex items-center justify-center
                  text-slate-900 text-3xl font-extrabold shadow-xl select-none">
                  DA
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-wide">
                    DevAgency
                  </h3>
                  <p className="text-[#00ffe7] font-semibold tracking-wide mt-1">
                    Bold solutions. Real growth.
                  </p>
                </div>
              </div>

              <blockquote className="mt-8 text-gray-300 italic leading-relaxed text-lg tracking-wide">
                "Not just service providers — your committed growth partners."
              </blockquote>

              <p className="mt-6 text-gray-400 text-sm italic border-l-4 border-amber-400 pl-4">
                From concept to launch, we focus on delivering stress-free,
                client-first experiences — helping you win in the digital world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .shadow-neon {
          box-shadow:
            0 0 6px #00ffe7aa,
            0 0 12px #00ffe7bb,
            0 0 24px #00ffe7cc;
        }
        .shadow-neon-lg {
          box-shadow:
            0 0 10px #00ffe7cc,
            0 0 20px #00ffe7dd,
            0 0 40px #00ffe7ff;
        }
        .drop-shadow-neon {
          filter: drop-shadow(0 0 6px #00ffe7aa);
        }
      `}</style>
    </>
  );
}
