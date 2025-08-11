import SectionTitle from "../components/SectionTitle";
import { FaReact, FaNodeJs, FaBriefcase, FaComments } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-gray-300"
    >
      <div className="container max-w-3xl mx-auto text-center px-6 sm:px-0">
        <SectionTitle title="About Us" />
        <div className="w-24 h-1 bg-amber-400 rounded mx-auto mt-2 mb-8" />

        <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          DevAgency is led by <strong>Saifullah</strong>, a passionate Software
          Engineer currently enhancing skills through hands-on internships and
          real-world projects. We build scalable web applications and admin
          dashboards that help businesses grow. Our focus is on delivering fast,
          clean, and reliable code — backed by clear communication and a
          client-first mindset.
        </p>

        <p className="mt-4 text-amber-400 italic max-w-2xl mx-auto">
          He sometimes jokes he regrets becoming a software engineer because
          perfection keeps him coding past midnight — but hey, that’s how you
          get great work done!
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
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
          ].map(({ Icon, title, description }) => (
            <div
              key={title}
              tabIndex={0}
              className="bg-slate-800 p-6 rounded-lg flex flex-col items-center text-center
                transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/40
                cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
            >
              <Icon className="text-amber-400 text-4xl mb-4" />
              <h4 className="text-lg font-semibold text-gray-200 mb-2">
                {title}
              </h4>
              <p className="text-gray-300">{description}</p>
            </div>
          ))}
        </div>

        <button
          className="mt-12 px-8 py-3 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold rounded shadow-lg transition"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            contactSection?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Let's Discuss Your Project
        </button>
      </div>
    </section>
  );
}

// import SectionTitle from "../components/SectionTitle";
// import { FaReact, FaNodeJs, FaBriefcase, FaComments } from "react-icons/fa";

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300"
//     >
//       <div className="container max-w-5xl mx-auto px-6 sm:px-0">
//         <SectionTitle title="About Us" />
//         <div className="w-20 h-1 bg-amber-400 rounded mx-auto mt-2 mb-10" />

//         <div className="md:flex md:gap-16">
//           {/* Text Content */}
//           <div className="md:flex-1 text-center md:text-left max-w-xl mx-auto md:mx-0">
//             <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-400 font-medium">
//               DevAgency is led by <strong>Saifullah</strong>, a dedicated software engineer passionate about real-world projects and continuous learning. We specialize in building scalable web apps and intuitive admin dashboards that empower businesses.
//             </p>
//             <p className="mt-6 italic text-amber-400 font-semibold tracking-wide">
//               Sometimes he jokes perfectionism keeps him coding past midnight — but that's how quality gets delivered!
//             </p>

//             <button
//               onClick={() => {
//                 const contactSection = document.getElementById("contact");
//                 contactSection?.scrollIntoView({ behavior: "smooth" });
//               }}
//               className="mt-10 px-7 py-2 rounded bg-amber-400 text-gray-900 font-semibold shadow-md hover:bg-amber-500 transition"
//               aria-label="Scroll to Contact Section"
//             >
//               Let's Discuss Your Project
//             </button>
//           </div>

//           {/* Cards */}
//           <div className="md:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 md:mt-0">
//             {[
//               {
//                 Icon: FaReact,
//                 title: "MERN Stack Expertise",
//                 description:
//                   "Proficient with React, Node.js, Express, MongoDB & Prisma for full-stack development.",
//               },
//               {
//                 Icon: FaBriefcase,
//                 title: "Real-World Experience",
//                 description:
//                   "Completed 6-8 week internships working on enterprise-level projects.",
//               },
//               {
//                 Icon: FaComments,
//                 title: "Clear Communication",
//                 description:
//                   "Consistent updates and client-focused collaboration for smooth project delivery.",
//               },
//               {
//                 Icon: FaNodeJs,
//                 title: "Continuous Learning",
//                 description:
//                   "Deep understanding of Java & OOP principles for scalable solutions.",
//               },
//             ].map(({ Icon, title, description }) => (
//               <article
//                 key={title}
//                 tabIndex={0}
//                 className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
//                 role="region"
//                 aria-label={title}
//               >
//                 <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-amber-400/20 text-amber-400 shadow-sm">
//                   <Icon className="text-2xl" />
//                 </div>
//                 <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
//                   {title}
//                 </h4>
//                 <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
//                   {description}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

