export default function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <div className="text-center mb-10 px-3">
      <h2
        className={`
          font-extrabold uppercase relative select-none
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em]
          ${className}
        `}
      >
        <span className="relative z-10">{title}</span>
        <span
          className="
            absolute left-1/2 -translate-x-1/2
            bottom-[-6px]
            w-12 sm:w-16 md:w-20 lg:w-24
            h-[2px] sm:h-[3px]
            rounded-full
            bg-gradient-to-r from-transparent via-[#E07A5F] to-transparent
            shadow-[0_0_6px_#E07A5F66] sm:shadow-[0_0_8px_#E07A5F88]
          "
        />
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#A08E76] font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}
