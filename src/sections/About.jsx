import SectionTitle from "../components/SectionTitle";
import { FaReact, FaNodeJs, FaBriefcase, FaComments } from "react-icons/fa";

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

  return (
    <section
      id="about"
      className="relative py-20 px-6 max-w-5xl mx-auto bg-gradient-to-br from-[#001a26] to-[#000a12] rounded-2xl shadow-[inset_0_0_80px_#00ffe7aa]"
      aria-label="About Us Section"
    >
      <SectionTitle title="About Us" />

      <div className="w-24 h-1 bg-[#00ffe7] rounded mx-auto mt-4 mb-12 shadow-neon" />

      <div className="bg-[#042f44cc] backdrop-blur-md border border-[#00ffe7] rounded-xl p-10 flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left shadow-neon">
        <div className="md:flex-1 max-w-xl">
          <p className="text-[#b0eaffcc] text-lg leading-relaxed font-medium">
            DevAgency is led by <strong className="text-[#00ffe7]">Saifullah</strong>, a passionate Software Engineer
            currently enhancing skills through hands-on internships and real-world projects. We build scalable web applications
            and admin dashboards that help businesses grow. Our focus is on delivering fast, clean, and reliable code — backed by
            clear communication and a client-first mindset.
          </p>

          <p className="mt-6 italic text-[#00ffe7aa] font-semibold tracking-wide">
            He sometimes jokes he regrets becoming a software engineer because perfection keeps him coding past midnight — but hey, that’s how you get great work done!
          </p>

          <button
            className="mt-10 px-10 py-3 rounded-full border-2 border-[#00ffe7] text-[#00ffe7] font-semibold hover:bg-[#00ffe733] shadow-neon transition focus:outline-none focus:ring-2 focus:ring-[#00ffe7] focus:ring-offset-2"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Scroll to Contact Section"
          >
            Let's Discuss Your Project
          </button>
        </div>

        <div className="md:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-xl">
          {features.map(({ Icon, title, description }) => (
            <article
              key={title}
              tabIndex={0}
              role="region"
              aria-label={title}
              className="bg-[#001f2f88] backdrop-blur-sm border border-[#00ffe7] rounded-xl p-6 flex flex-col items-center text-center shadow-neon hover:shadow-neon-lg transition-transform duration-300 hover:scale-[1.05] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00ffe7] focus:ring-offset-1"
            >
              <Icon className="text-[#00ffe7] text-5xl mb-4" />
              <h4 className="text-xl font-bold text-[#00ffe7] mb-2 tracking-wide">{title}</h4>
              <p className="text-[#b0eaffcc] text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .shadow-neon {
          box-shadow:
            0 0 8px #00ffe7aa,
            0 0 20px #00ffe7cc,
            0 0 35px #00ffe7ff;
        }
        .shadow-neon-lg {
          box-shadow:
            0 0 15px #00ffe7dd,
            0 0 40px #00ffe7ff,
            0 0 60px #00ffe7ff;
        }
      `}</style>
    </section>
  );
}
