import { useState, useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const menuRef = useRef(null);

  const links = [
    { name: "Home", to: "hero" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "projects" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
  ];

  // Scroll to hash on page load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActive(hash);
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    }
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Keyboard accessibility: close menu on Escape
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    if (open) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Scroll to top on brand click
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true });
    setActive("hero");
    history.replaceState(null, "", "#hero");
  };

  // Offset for fixed navbar height (72px)
  const scrollOffset = -72;

  return (
    <nav
      id="site-navbar"
      className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800"
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-[72px]">
        {/* Brand */}
        <button
          onClick={scrollToTop}
          className="flex items-center group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded"
          aria-label="Scroll to top"
        >
          <span className="text-2xl font-extrabold text-amber-400 tracking-tight">
            Dev
          </span>
          <span className="text-xl font-light text-gray-200 tracking-widest ml-1">
            Agency
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              spy={true}
              smooth={true}
              duration={500}
              offset={scrollOffset}
              onSetActive={(id) => {
                setActive(id);
                history.replaceState(null, "", `#${id}`);
              }}
              className={`relative cursor-pointer transition-colors duration-300 pb-1 text-sm sm:text-base ${
                active === to
                  ? "text-amber-400 after:w-full"
                  : "text-gray-300 hover:text-amber-400 after:w-0 hover:after:w-full"
              } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-amber-400 after:transition-all after:duration-300`}
              tabIndex={0}
              role="link"
              aria-current={active === to ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 bg-slate-800 rounded text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden bg-slate-900/95 border-t border-slate-800"
          role="menu"
        >
          <div className="flex flex-col items-center py-5 gap-6">
            {links.map(({ name, to }) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={500}
                offset={scrollOffset}
                onClick={() => {
                  setActive(to);
                  setOpen(false);
                  history.replaceState(null, "", `#${to}`);
                }}
                className={`cursor-pointer text-lg font-medium transition-colors ${
                  active === to
                    ? "text-amber-400"
                    : "text-gray-200 hover:text-amber-400"
                }`}
                tabIndex={0}
                role="menuitem"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
