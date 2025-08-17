import SectionTitle from "../components/SectionTitle";
import {
  FaReact,
  FaNodeJs,
  FaBriefcase,
  FaComments,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import React, { useRef, useEffect, useState } from "react";

export default function About() {
  const features = [
    {
      Icon: FaReact,
      title: "MERN Stack Expertise",
      description:
        "Mastery of React, Node.js, Express, MongoDB & Prisma, delivering full-stack solutions.",
    },
    {
      Icon: FaBriefcase,
      title: "Real-World Experience",
      description:
        "6-8 weeks of rigorous internship work on enterprise projects, sharpening practical skills.",
    },
    {
      Icon: FaComments,
      title: "Clear Communication",
      description:
        "Transparent updates, responsiveness, and client-focused collaboration.",
    },
    {
      Icon: FaNodeJs,
      title: "Continuous Learning",
      description:
        "Deep understanding of Java & OOP principles, preparing for scalable and maintainable systems.",
    },
  ];

  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const cardWidth = 288;
  const gap = 24;
  const scrollAmount = cardWidth + gap;

  const scrollLeft = () => {
    if (containerRef.current) {
      setIsPaused(true);
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
      setTimeout(() => setIsPaused(false), 3000);
    }
  };
  const scrollRight = () => {
    if (containerRef.current) {
      setIsPaused(true);
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(() => setIsPaused(false), 3000);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let animationFrame;
    const speed = 0.5;
    const singleSetWidth = (cardWidth + gap) * features.length;
    const totalScrollWidth = singleSetWidth * 2;

    const step = () => {
      if (!isPaused) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= totalScrollWidth) {
          container.scrollLeft -= singleSetWidth;
        }
      }
      animationFrame = requestAnimationFrame(step);
    };
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto 
      bg-gradient-to-br from-[#1F262B] to-[#2D2D34] rounded-3xl"
      aria-label="About Us Section"
    >
      <SectionTitle title="About Us" className="text-[#E07A5F]" />
      <div className="w-20 h-1 bg-[#E07A5F] rounded mx-auto mt-3 mb-8 sm:mb-12" />

      <div
        className="
          bg-[#1F262Bcc] backdrop-blur-md border border-[#E07A5F55] 
          rounded-2xl p-6 sm:p-8 md:p-10 
          flex flex-col lg:flex-row gap-10 lg:gap-12 
          items-center lg:items-start text-center lg:text-left
        "
      >
        {/* Text Side */}
        <div className="lg:flex-1 max-w-xl">
          <p className="text-[#E0C5A0cc] text-base sm:text-lg leading-relaxed font-medium">
            Peak Code Studio is led by{" "}
            <strong className="text-[#E07A5F]">Saifullah</strong>, a passionate
            Software Engineer currently enhancing skills through hands-on
            internships and real-world projects. We build scalable web
            applications and admin dashboards that help businesses grow. Our
            focus is on delivering fast, clean, and reliable code — backed by
            clear communication and a client-first mindset.
          </p>

          <p className="mt-4 sm:mt-6 italic text-[#E07A5Fcc] font-semibold tracking-wide">
            He sometimes jokes he regrets becoming a software engineer because
            perfection keeps him coding past midnight — but hey, that’s how you
            get great work done!
          </p>

          <button
            className="
              mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full 
              border-2 border-[#E07A5F] text-[#E07A5F] font-semibold 
              hover:bg-[#E07A533] transition 
              focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:ring-offset-2
            "
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let's Discuss Your Project
          </button>
        </div>

        {/* Features Side */}
        {/* Desktop / Tablet → Grid */}
        <div className="hidden sm:grid lg:flex-1 grid-cols-2 gap-6 sm:gap-8 w-full max-w-xl">
          {features.map(({ Icon, title, description }) => (
            <article
              key={title}
              className="
                bg-[#1F262B99] backdrop-blur-sm border border-[#E07A5F55] 
                rounded-xl p-5 sm:p-6 flex flex-col items-center text-center 
                transition-transform duration-300 hover:-translate-y-1
              "
            >
              <Icon className="text-[#E07A5F] text-4xl sm:text-5xl mb-3 sm:mb-4" />
              <h4 className="text-base sm:text-lg font-bold text-[#E07A5F] mb-1 sm:mb-2">
                {title}
              </h4>
              <p className="text-[#E0C5A0cc] text-xs sm:text-sm leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>

        {/* Mobile → Carousel */}
        <div className="sm:hidden relative w-full">
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 
            p-2 rounded-full backdrop-blur-md bg-white/10 border border-[#E07A5F50] 
            hover:bg-[#E07A5F]/80 hover:text-[#1F262B] transition z-10 shadow-lg"
          >
            <FaChevronLeft size={18} />
          </button>
          <button
            onClick={scrollRight}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 
            p-2 rounded-full backdrop-blur-md bg-white/10 border border-[#E07A5F50] 
            hover:bg-[#E07A5F]/80 hover:text-[#1F262B] transition z-10 shadow-lg"
          >
            <FaChevronRight size={18} />
          </button>

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-hidden cursor-pointer"
          >
            {[...features, ...features].map(
              ({ Icon, title, description }, i) => (
                <div
                  key={title + "-" + i}
                  className="flex-shrink-0 w-72 rounded-2xl
                bg-[#1F262B] bg-opacity-90 backdrop-blur-md
                border border-[#E07A5F55]
                p-6 flex flex-col items-center text-center
                transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center rounded-full bg-[#E07A5F] w-14 h-14 mb-4">
                    <Icon size={32} color="#1F262B" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#F4F1DE] mb-2 tracking-wide">
                    {title}
                  </h3>
                  <p className="text-[#E0C5A0cc] text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
