import { useState, useEffect, lazy, Suspense } from "react";
import Navbar from "./Navbar";
import Hero from "../sections/Hero";
const Services = lazy(() => import("../sections/Services"));
const Projects = lazy(() => import("../sections/Projects"));
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "./Footer";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Delay loading services and projects
  useEffect(() => {
    const servicesTimer = setTimeout(() => setShowServices(true), 500); // 0.5s delay
    const projectsTimer = setTimeout(() => setShowProjects(true), 1000); // 1s delay
    return () => {
      clearTimeout(servicesTimer);
      clearTimeout(projectsTimer);
    };
  }, []);

  return (
    <>
      <Navbar open={sidebarOpen} setOpen={setSidebarOpen} isMobile={isMobile} />
      <main
        className={`
          transition-[margin] duration-300 ease-in-out
          bg-[#1F262B] min-h-screen
          pt-12 px-6
          ${isMobile ? "ml-0" : sidebarOpen ? "ml-56" : "ml-16"}
        `}
      >
        <Hero />

        {/* Lazy-load Services after short delay */}
        {showServices && (
          <Suspense
            fallback={<div className="text-white">Loading Services...</div>}
          >
            <Services />
          </Suspense>
        )}

        {/* Lazy-load Projects after short delay */}
        {showProjects && (
          <Suspense
            fallback={<div className="text-white">Loading Projects...</div>}
          >
            <Projects />
          </Suspense>
        )}

        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
