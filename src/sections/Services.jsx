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
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Services() {
  const [loaded, setLoaded] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Web Development",
      desc: "Modern, responsive, and scalable web apps.",
      icon: (
        <FaLaptopCode className="text-gray-800 dark:text-gray-200" size={32} />
      ),
      details: "We build websites optimized for performance and SEO.",
    },
    {
      title: "Mobile Apps",
      desc: "Cross-platform apps with smooth UX.",
      icon: (
        <FaMobileAlt className="text-gray-800 dark:text-gray-200" size={32} />
      ),
      details: "Native-like experience on iOS and Android platforms.",
    },
    {
      title: "Custom Solutions",
      desc: "Tailor-made tools for your business.",
      icon: (
        <FaPuzzlePiece className="text-gray-800 dark:text-gray-200" size={32} />
      ),
      details: "Solutions designed exactly to your unique requirements.",
    },
    {
      title: "Cloud Integration",
      desc: "Reliable cloud-based architectures.",
      icon: <FaCloud className="text-gray-800 dark:text-gray-200" size={32} />,
      details: "Seamlessly connect and scale using AWS, Azure, or GCP.",
    },
    {
      title: "Data Analytics",
      desc: "Insightful data-driven decision making.",
      icon: (
        <FaChartLine className="text-gray-800 dark:text-gray-200" size={32} />
      ),
      details: "Transform your data into actionable insights.",
    },
    {
      title: "Security Services",
      desc: "Protect your digital assets.",
      icon: <FaLock className="text-gray-800 dark:text-gray-200" size={32} />,
      details: "Implement best practices in application security.",
    },
  ];

  const [sliderContainerRef, slider] = useKeenSlider({
    loop: false,
    mode: "free",
    slides: {
      perView: 1,
      spacing: 20, // add some spacing between slides
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1.5, spacing: 15 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2.2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
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
      className="relative py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto bg-slate-50 dark:bg-slate-900 rounded-md"
    >
      <SectionTitle title="Our Services" subtitle="What We Offer" />

      <div className="w-20 h-1 bg-amber-400 rounded mt-2 mb-10 mx-auto" />

      <AnimatePresence>
        {loaded && (
          <>
            <motion.div
              key="services-slider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              ref={sliderContainerRef}
              className="keen-slider px-[calc((100vw-26rem)/2)] sm:px-0"
              aria-label="Services carousel"
              role="list"
            >
              {services.map(({ title, desc, icon, details }, i) => (
                <motion.div
                  key={title}
                  className="keen-slider__slide"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleFlip(i)}
                  role="listitem"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFlip(i);
                    }
                  }}
                  aria-pressed={flippedIndex === i}
                  aria-label={`${title} service card. Press Enter or Space to flip and see more info.`}
                >
                  <motion.div
                    className="relative w-64 sm:w-72 md:w-72 h-44 mx-auto perspective"
                    layout
                    initial={false}
                  >
                    {/* Front Side */}
                    <motion.div
                      className="absolute w-full h-full bg-white dark:bg-slate-800 rounded-lg shadow-md border border-gray-300 dark:border-slate-700 flex flex-col items-center justify-center p-6"
                      style={{
                        backfaceVisibility: "hidden",
                        rotateY: flippedIndex === i ? 180 : 0,
                        transformStyle: "preserve-3d",
                      }}
                      aria-hidden={flippedIndex === i}
                    >
                      <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-md bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300">
                        {icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center">
                        {title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                        {desc}
                      </p>
                    </motion.div>

                    {/* Back Side */}
                    <motion.div
                      className="absolute w-full h-full bg-amber-50 dark:bg-amber-900 rounded-lg shadow-md border border-amber-300 dark:border-amber-700 p-6 flex flex-col justify-center"
                      style={{
                        backfaceVisibility: "hidden",
                        rotateY: flippedIndex === i ? 0 : -180,
                        transformStyle: "preserve-3d",
                      }}
                      aria-hidden={flippedIndex !== i}
                    >
                      <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-200 mb-2 text-center">
                        More Info
                      </h3>
                      <p className="text-amber-800 dark:text-amber-300 leading-relaxed text-sm">
                        {details}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Prev Arrow */}
            <button
              aria-label="Previous Service"
              onClick={() => sliderRef.current?.prev()}
              className="absolute left-4 bottom-36 p-3 rounded-full bg-slate-200 dark:bg-slate-700 shadow hover:shadow-lg transition-opacity duration-300 opacity-40 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1"
            >
              <FaChevronLeft
                size={22}
                className="text-gray-700 dark:text-gray-200"
              />
            </button>

            {/* Next Arrow */}
            <button
              aria-label="Next Service"
              onClick={() => sliderRef.current?.next()}
              className="absolute right-4 bottom-36 p-3 rounded-full bg-slate-200 dark:bg-slate-700 shadow hover:shadow-lg transition-opacity duration-300 opacity-40 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-1"
            >
              <FaChevronRight
                size={22}
                className="text-gray-700 dark:text-gray-200"
              />
            </button>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
