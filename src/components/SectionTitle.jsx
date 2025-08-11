export default function SectionTitle({ title }) {
  return (
    <h2
      className="
        text-4xl md:text-5xl font-extrabold text-center text-[#00ffe7] 
        uppercase tracking-widest 
        relative
        before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 
        before:w-24 before:h-1 before:rounded-full before:bg-[#00ffe7] before:opacity-50 
        before:transition-all before:duration-500 
        hover:before:w-32
        select-none
      "
      style={{ position: "relative" }}
    >
      {title}
    </h2>
  );
}
