import { useState, useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBriefcase,
  FiFolder,
  FiUser,
  FiMail,
} from "react-icons/fi";

const navIcons = {
  hero: <FiHome size={20} />,
  services: <FiBriefcase size={20} />,
  projects: <FiFolder size={20} />,
  about: <FiUser size={20} />,
  contact: <FiMail size={20} />,
};

export default function SidebarNavbar() {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("hero");
  const menuRef = useRef(null);

  const links = [
    { name: "Home", to: "hero" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "projects" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActive(hash);
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "instant" });
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open && window.innerWidth < 768) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const scrollOffset = -20;

  return (
    <>
      {/* Sidebar */}
      <nav
        ref={menuRef}
        className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-gray-400
          flex flex-col justify-between shadow-xl transition-all duration-500
          ${open
            ? "w-56 px-6 py-10"
            : "w-16 px-3 py-10 overflow-hidden"
          }`}
        aria-label="Sidebar Navigation"
      >
        {/* Brand */}
        <div
          onClick={() => {
            scroll.scrollToTop({ smooth: true });
            setActive("hero");
            history.replaceState(null, "", "#hero");
          }}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              scroll.scrollToTop({ smooth: true });
              setActive("hero");
              history.replaceState(null, "", "#hero");
            }
          }}
          role="button"
          aria-label="Scroll to top"
          className="flex flex-col items-center cursor-pointer select-none mb-10"
        >
          <div
            className={`bg-[#0f3460] rounded-full flex items-center justify-center
              shadow-lg w-14 h-14 mb-3 transition-transform duration-300 ${open ? "scale-100" : "scale-75"
              }`}
          >
            <span className="text-white font-extrabold text-3xl tracking-wider">DA</span>
          </div>
          {open && (
            <>
              <h1 className="text-xl font-semibold text-white tracking-wide">
                DevAgency
              </h1>
              <p className="text-xs text-[#9a9a9a] mt-1 uppercase font-mono">
                Your Digital Partner
              </p>
            </>
          )}
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-8">
          {links.map(({ name, to }) => {
            const isActive = active === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={scrollOffset}
                  onSetActive={(id) => {
                    setActive(id);
                    history.replaceState(null, "", `#${id}`);
                    if (window.innerWidth < 768) setOpen(false);
                  }}
                  onClick={() => {
                    setActive(to);
                    if (window.innerWidth < 768) setOpen(false);
                    history.replaceState(null, "", `#${to}`);
                  }}
                  className={`flex items-center gap-4 cursor-pointer select-none rounded-md px-3 py-2
                    transition-colors duration-300
                    ${isActive
                      ? "bg-[#0f3460] text-[#00ffe7] shadow-[0_0_10px_#00ffe7]"
                      : "hover:bg-[#16213e] hover:text-[#00ffe7]"
                    }
                    ${open ? "justify-start" : "justify-center"}`}
                  tabIndex={0}
                  role="link"
                  aria-current={isActive ? "page" : undefined}
                >
                  <span
                    className={`text-lg ${isActive ? "text-[#00ffe7]" : "text-gray-400"
                      }`}
                  >
                    {navIcons[to]}
                  </span>
                  {open && <span className="font-semibold text-base">{name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Collapse/Expand Toggle */}
        <button
          aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
          onClick={() => setOpen((v) => !v)}
          className="self-center mt-10 p-2 bg-[#0f3460] rounded-md shadow-lg hover:bg-[#16213e] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00ffe7] focus:ring-offset-2"
        >
          {open ? (
            <FiX size={24} className="text-[#00ffe7]" />
          ) : (
            <FiMenu size={24} className="text-[#00ffe7]" />
          )}
        </button>
      </nav>

      {/* Spacer to push content right */}
      <div className={`${open ? "ml-56" : "ml-16"} transition-margin duration-500`} />
    </>
  );
}
