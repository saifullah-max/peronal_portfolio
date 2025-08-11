import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <>
      {/* Teal colored line below navbar */}
      <div className="w-20 h-1 bg-amber-400 rounded mx-auto mt-2 mb-10" />

      <section
        id="hero"
        className="min-h-[85vh] flex items-center bg-slate-900 py-16 sm:py-20"
        aria-label="Hero section"
      >
        <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm sm:text-base text-teal-400 font-medium mb-4 tracking-wide">
              Turning Ideas into Impact • Across Industries
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
              We build <span className="text-amber-400">scalable</span> and{" "}
              <span className="text-teal-300">goal-driven</span> digital
              solutions.
            </h1>

            <p className="mt-6 text-gray-300 max-w-xl leading-relaxed text-sm sm:text-base">
              From entrepreneurs to established brands, we help bring visions to
              life with thoughtful design, reliable technology, and measurable
              results. Whether it’s a digital product, online presence, or a
              custom solution, we focus on outcomes that matter to you.
            </p>

            {/* Buttons: flex-nowrap with horizontal scroll fallback */}
            <div className="mt-8 flex flex-row gap-4 flex-nowrap max-w-full overflow-x-auto">
              <ScrollLink
                to="contact"
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer bg-amber-400 text-slate-900 px-6 py-3 rounded font-semibold hover:bg-amber-300 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1 whitespace-nowrap"
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
                duration={500}
                className="cursor-pointer border border-gray-600 text-gray-200 px-6 py-3 rounded hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1 whitespace-nowrap"
                role="button"
                tabIndex={0}
                aria-label="View our work"
              >
                View Our Work
              </ScrollLink>
            </div>

            {/* Bullet points: inline row on mobile, left-aligned on md+ */}
            <div className="mt-6 text-sm text-gray-400 flex flex-row flex-wrap justify-center md:justify-start gap-3 max-w-full">
              <span>Fast delivery</span>
              <span aria-hidden="true">•</span>
              <span>Clear communication</span>
              <span aria-hidden="true">•</span>
              <span title="Non-Disclosure Agreement — your project details remain private">
                NDA on request
              </span>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-md mx-auto bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 p-8 rounded-xl border border-slate-600 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-teal-300 flex items-center justify-center text-slate-900 text-2xl font-bold shadow-md select-none">
                  DA
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    DevAgency
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Building Solutions That Move Your Business Forward
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <blockquote className="text-gray-300 leading-relaxed italic">
                  "More than services — we provide a partnership that helps you
                  reach the next level."
                </blockquote>
                <p className="bg-slate-900 border border-slate-700 px-4 py-3 rounded-lg text-sm text-gray-400 italic">
                  From the first conversation to the final delivery, our focus
                  stays on making your vision a reality — without the stress.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
