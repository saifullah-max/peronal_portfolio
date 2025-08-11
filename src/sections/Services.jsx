import SectionTitle from "../components/SectionTitle";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPuzzlePiece,
  FaCloud,
  FaChartLine,
  FaLock,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Services() {
  const [loaded, setLoaded] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Web Development",
      desc: "Responsive, blazing-fast, and scalable web applications.",
      icon: <FaLaptopCode size={36} className="text-[#00ffe7]" />,
      details:
        "Building modern websites that prioritize performance, SEO, and accessibility.",
    },
    {
      title: "Mobile Apps",
      desc: "Smooth, cross-platform mobile experiences.",
      icon: <FaMobileAlt size={36} className="text-[#ff8c00]" />,
      details: "Delivering native-like performance on iOS and Android devices.",
    },
    {
      title: "Custom Solutions",
      desc: "Tailored tools crafted just for your business.",
      icon: <FaPuzzlePiece size={36} className="text-[#00ffe7]" />,
      details:
        "Designing bespoke software that fits your unique requirements and workflows.",
    },
    {
      title: "Cloud Integration",
      desc: "Scalable cloud-native architectures.",
      icon: <FaCloud size={36} className="text-[#ff8c00]" />,
      details: "Seamless integration with AWS, Azure, or GCP for ultimate flexibility.",
    },
    {
      title: "Data Analytics",
      desc: "Unlock powerful insights from your data.",
      icon: <FaChartLine size={36} className="text-[#00ffe7]" />,
      details: "Transform raw data into actionable business intelligence.",
    },
    {
      title: "Security Services",
      desc: "Fortify your digital presence.",
      icon: <FaLock size={36} className="text-[#ff8c00]" />,
      details:
        "Implementing industry best practices to safeguard your applications and data.",
    },
  ];

  const [sliderContainerRef, slider] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    slides: { perView: 1.2, spacing: 24 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 1.6, spacing: 28 } },
      "(min-width: 768px)": { slides: { perView: 2.4, spacing: 32 } },
      "(min-width: 1024px)": { slides: { perView: 3.3, spacing: 40 } },
    },
    created(s) {
      sliderRef.current = s;
    },
  });

  const toggleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="services"
      className="relative py-20 px-4 max-w-7xl mx-auto rounded-lg bg-gradient-to-br from-[#001a26] to-[#000a12] shadow-[inset_0_0_50px_#00ffe7aa]"
      aria-label="Our Services"
    >
      <SectionTitle title="Our Services" subtitle="What We Offer" />

      <div className="w-24 h-1 bg-[#00ffe7] rounded mx-auto mt-3 mb-12 shadow-neon" />

      <AnimatePresence>
        {loaded && (
          <>
            <motion.div
              key="services-slider"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              ref={sliderContainerRef}
              className="keen-slider"
              role="list"
            >
              {services.map(({ title, desc, icon, details }, i) => (
                <motion.div
                  key={title}
                  className="keen-slider__slide"
                  role="listitem"
                  tabIndex={0}
                  onClick={() => toggleFlip(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFlip(i);
                    }
                  }}
                  aria-pressed={flippedIndex === i}
                  aria-label={`${title} service card. Press Enter or Space to flip for more info.`}
                  style={{ cursor: "pointer" }}
                >
                  <motion.div
                    className="relative w-72 h-52 mx-auto perspective"
                    layout
                    initial={false}
                  >
                    {/* Front Side */}
                    <motion.div
                      className={`absolute w-full h-full rounded-2xl bg-[#041f2c] bg-opacity-80 backdrop-blur-md border border-[#00ffe7] shadow-neon-lg
                        flex flex-col justify-center items-center p-6 select-none`}
                      style={{
                        backfaceVisibility: "hidden",
                        rotateY: flippedIndex === i ? 180 : 0,
                        transformStyle: "preserve-3d",
                        transition: "transform 0.6s ease",
                      }}
                      aria-hidden={flippedIndex === i}
                    >
                      <div className="mb-4">{icon}</div>
                      <h3 className="text-2xl font-semibold text-white mb-1 text-center tracking-wide">
                        {title}
                      </h3>
                      <p className="text-[#b0eaffcc] text-center text-sm tracking-wide">
                        {desc}
                      </p>
                    </motion.div>

                    {/* Back Side */}
                    <motion.div
                      className={`absolute w-full h-full rounded-2xl bg-[#002d3a] bg-opacity-90 border border-[#ff8c00] shadow-neon-lg
                        p-6 flex flex-col justify-center select-text`}
                      style={{
                        backfaceVisibility: "hidden",
                        rotateY: flippedIndex === i ? 0 : -180,
                        transformStyle: "preserve-3d",
                        transition: "transform 0.6s ease",
                      }}
                      aria-hidden={flippedIndex !== i}
                    >
                      <h3 className="text-xl font-bold text-[#ff8c00] mb-2 text-center tracking-wide">
                        More Info
                      </h3>
                      <p className="text-[#ffb14ecc] text-sm leading-relaxed tracking-wide">
                        {details}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Navigation Arrows */}
            <button
              aria-label="Previous Service"
              onClick={() => sliderRef.current?.prev()}
              className="absolute left-4 bottom-20 p-3 rounded-full bg-[#002b3a] shadow-neon hover:shadow-neon-lg transition-opacity duration-300 opacity-50 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#00ffe7] focus:ring-offset-1"
            >
              <FaChevronLeft size={24} className="text-[#00ffe7]" />
            </button>
            <button
              aria-label="Next Service"
              onClick={() => sliderRef.current?.next()}
              className="absolute right-4 bottom-20 p-3 rounded-full bg-[#002b3a] shadow-neon hover:shadow-neon-lg transition-opacity duration-300 opacity-50 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#ff8c00] focus:ring-offset-1"
            >
              <FaChevronRight size={24} className="text-[#ff8c00]" />
            </button>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .shadow-neon {
          box-shadow:
            0 0 5px #00ffe7aa,
            0 0 10px #00ffe7cc,
            0 0 20px #00ffe7dd;
        }
        .shadow-neon-lg {
          box-shadow:
            0 0 15px #00ffe7ee,
            0 0 25px #00ffe7ff,
            0 0 45px #00ffe7ff;
        }
      `}</style>
    </section>
  );
}
