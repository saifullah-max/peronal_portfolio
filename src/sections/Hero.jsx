export default function Hero({ sidebarOpen }) {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      style={{
        marginLeft: sidebarOpen ? 0 : 34,
        transition: "margin-left 0.4s ease",
      }}
      className="min-h-[90vh] py-16 sm:py-20 px-6 sm:px-10 lg:px-16"
    >
      <div
        className="
          max-w-[1200px] mx-auto 
          grid grid-cols-1 md:grid-cols-2 
          gap-12 lg:gap-20 items-center
        "
        style={{
          background:
            "linear-gradient(180deg, #1F262B 0%, #2D2D34 50%, #1F262B 100%)",
        }}
      >
        {/* Left Content */}
        <div className="text-center md:text-left">
          <p className="mb-4 sm:mb-6 uppercase font-semibold tracking-widest select-none text-[#E07A5F] text-sm sm:text-base">
            Innovate • Build • Scale
          </p>

          <h1 className="mb-6 sm:mb-8 font-extrabold leading-tight text-[#F4F1DE] text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
            Crafting <span className="text-[#E07A5F]">bold</span>,{" "}
            <span className="text-[#CCCCCC]">impactful</span> digital
            experiences.
          </h1>

          <p className="text-base sm:text-lg max-w-md mx-auto md:mx-0 leading-relaxed text-[#CCCCCC]">
            From startups to enterprises, we design & develop next-level apps
            and dashboards with speed, precision, and a relentless focus on what
            matters — your success.
          </p>
        </div>

        {/* Right Card */}
        <div
          className="
            rounded-2xl sm:rounded-3xl 
            p-6 sm:p-10 border-2 
            max-w-md w-full mx-auto
            md:mx-0
          "
          style={{
            backgroundColor: "#1F262B",
            borderColor: "#E07A5F",
            color: "#CCCCCC",
            userSelect: "none",
          }}
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <div
              className="rounded-full flex items-center justify-center font-extrabold shadow-xl"
              style={{
                width: "5rem",
                height: "5rem",
                background: "linear-gradient(45deg, #E07A5F, #CCCCCC)",
                color: "#1F262B",
                fontSize: "1.5rem",
                boxShadow: "0 0 10px #E07A5F88",
              }}
            >
              PC
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#F4F1DE]">
                Peak Code Studio
              </h3>
              <p className="mt-1 font-semibold text-[#E07A5F] text-sm sm:text-base">
                Bold solutions. Real growth.
              </p>
            </div>
          </div>

          <blockquote className="mt-6 sm:mt-8 italic text-base sm:text-lg leading-relaxed text-[#999999]">
            "Not just service providers — your committed growth partners."
          </blockquote>

          <p className="mt-4 sm:mt-6 italic pl-3 sm:pl-4 border-l-4 border-[#E07A5F] text-sm sm:text-base text-[#888888]">
            From concept to launch, we focus on delivering stress-free,
            client-first experiences — helping you win in the digital world.
          </p>
        </div>
      </div>

      {/* Custom fix for short screens */}
      <style jsx>{`
        @media (max-width: 1024px) and (max-height: 600px) {
          #hero > div {
            grid-template-columns: 1fr !important; /* force single column */
          }
        }
      `}</style>
    </section>
  );
}
