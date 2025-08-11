import { useEffect, useRef, useState } from "react";

// SectionTitle component with amber line
function SectionTitle({ title, className = "" }) {
  return (
    <div className="text-center">
      <h1
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 ${className}`}
      >
        {title}
      </h1>
      <div className="w-24 h-1 bg-amber-400 rounded mx-auto" />
    </div>
  );
}

// Animated Lines Background Component
function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animated elements
    const elements = [];
    const numElements = 12;

    for (let i = 0; i < numElements; i++) {
      elements.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      time += 0.01;

      // Draw flowing lines
      ctx.strokeStyle = `rgba(245, 158, 11, ${0.1 + Math.sin(time) * 0.05})`;
      ctx.lineWidth = 1;
      ctx.beginPath();

      for (let i = 0; i < canvas.offsetWidth; i += 50) {
        const wave1 = Math.sin((i + time * 50) * 0.01) * 25;
        const wave2 = Math.cos((i + time * 30) * 0.015) * 15;
        ctx.moveTo(i, canvas.offsetHeight / 2 + wave1);
        ctx.lineTo(i + 50, canvas.offsetHeight / 2 + wave2);
      }
      ctx.stroke();

      // Draw connecting lines between elements
      elements.forEach((element, i) => {
        elements.forEach((otherElement, j) => {
          if (i !== j) {
            const dx = element.x - otherElement.x;
            const dy = element.y - otherElement.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              const opacity = (1 - distance / 100) * 0.12;
              ctx.strokeStyle = `rgba(245, 158, 11, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(element.x, element.y);
              ctx.lineTo(otherElement.x, otherElement.y);
              ctx.stroke();
            }
          }
        });
      });

      // Update and draw elements
      elements.forEach((element, i) => {
        // Update position
        element.x += element.vx + Math.sin(time + element.phase) * 0.2;
        element.y += element.vy + Math.cos(time + element.phase) * 0.15;

        // Bounce off edges
        if (element.x < 0 || element.x > canvas.offsetWidth) element.vx *= -1;
        if (element.y < 0 || element.y > canvas.offsetHeight) element.vy *= -1;

        // Keep in bounds
        element.x = Math.max(0, Math.min(canvas.offsetWidth, element.x));
        element.y = Math.max(0, Math.min(canvas.offsetHeight, element.y));

        // Draw element
        const pulseOpacity = element.opacity + Math.sin(time * 2 + i) * 0.08;
        ctx.fillStyle = `rgba(245, 158, 11, ${pulseOpacity})`;
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}

// Floating Geometric Shapes Component
function FloatingShapes() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated geometric shapes - optimized for smaller space */}
        <div
          className="absolute top-12 left-12 w-16 h-16 border border-amber-400/20"
          style={{
            transform: "rotate(45deg)",
            animation: "spin-slow 20s linear infinite",
          }}
        ></div>
        <div
          className="absolute top-24 right-16 w-12 h-12 bg-amber-400/10 rounded-full"
          style={{
            animation: "float 4s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute bottom-24 left-8 w-10 h-10 bg-gradient-to-r from-amber-400/20 to-transparent"
          style={{
            transform: "rotate(45deg)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute bottom-12 right-12 w-20 h-1 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"
          style={{
            animation: "pulse 3s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-6 w-6 h-16 bg-gradient-to-b from-amber-400/20 to-transparent"
          style={{
            animation: "float 4s ease-in-out infinite",
          }}
        ></div>
      </div>

      {/* CSS for custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-20px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen text-white py-8 sm:py-12">
      {/* Removed bg-slate-950 from here */}

      {/* Main Heading with Amber Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
        <SectionTitle title="Contact Us" className="text-white" />
      </div>

      <section
        ref={sectionRef}
        id="contact"
        className="px-4 sm:px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8"
        style={{ minHeight: "70vh", maxHeight: "600px" }}
      >
        {/* Mobile-only message */}
        <div className="block md:hidden text-center mb-6 px-4">
          <h2 className="text-2xl font-serif font-bold text-white mb-2">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-sm mx-auto text-sm leading-relaxed">
            Questions, ideas, or collaboration? Send us a message and let's make
            it happen.
          </p>
        </div>

        {/* Left side: Form */}
        <div
          className={`flex-1 w-full lg:w-1/2 bg-slate-900 rounded-xl p-5 sm:p-6 lg:p-8 shadow-xl z-10 relative transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-4 sm:translate-x-8 lg:translate-x-16 opacity-0"
          }`}
          style={{
            minHeight: "400px",
            maxHeight: "480px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <form
            className="flex-grow flex flex-col justify-center"
            onSubmit={handleSubmit}
            noValidate
          >
            <p className="text-gray-400 mb-5 sm:mb-6 max-w-md text-center lg:text-left text-sm sm:text-base lg:text-lg leading-relaxed">
              Have a project or question? Reach out — we're here to help and
              collaborate.
            </p>

            <div className="grid gap-4">
              {[
                {
                  label: "Your Name",
                  name: "name",
                  type: "text",
                  placeholder: "John Doe",
                },
                {
                  label: "Your Email",
                  name: "email",
                  type: "email",
                  placeholder: "john@example.com",
                },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name} className="flex flex-col">
                  <label
                    htmlFor={name}
                    className="mb-1.5 text-xs sm:text-sm text-amber-400 font-semibold"
                  >
                    {label}
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleInputChange}
                    required
                    className="p-2.5 sm:p-3 rounded-lg bg-slate-800 border border-amber-600 placeholder-amber-600/70
                      focus:outline-none focus:ring-3 focus:ring-amber-400/50 focus:border-amber-400 transition-all duration-300 shadow-sm text-white text-sm sm:text-base"
                  />
                </div>
              ))}

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="mb-1.5 text-xs sm:text-sm text-amber-400 font-semibold"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2.5}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="p-2.5 sm:p-3 rounded-lg bg-slate-800 border border-amber-600 placeholder-amber-600/70
                    focus:outline-none focus:ring-3 focus:ring-amber-400/50 focus:border-amber-400 transition-all duration-300 shadow-sm resize-none text-white text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="bg-amber-400 hover:bg-amber-500 focus-visible:ring-4 focus-visible:ring-amber-500/50
                  text-slate-900 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-amber-400/25 hover:shadow-xl transform hover:scale-[1.02] text-sm sm:text-base mt-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right side: Animated background + shapes */}
        <div
          className={`hidden md:flex flex-1 w-full lg:w-1/2 relative rounded-xl overflow-hidden shadow-lg p-5 sm:p-6 lg:p-8 flex flex-col justify-center transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-4 sm:-translate-x-8 lg:-translate-x-16 opacity-0"
          }`}
          style={{
            minHeight: "400px",
            maxHeight: "480px",
            background:
              "linear-gradient(135deg, rgba(71,85,105,0.9) 0%, rgba(71,85,105,0.7) 100%)",
          }}
        >
          <AnimatedBackground />
          <FloatingShapes />

          {/* Gradient Overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/5 via-transparent to-amber-600/10 pointer-events-none"></div>

          {/* Animated border glow */}
          <div
            className="absolute inset-0 rounded-xl border border-amber-400/20"
            style={{ animation: "pulse 2s ease-in-out infinite" }}
          ></div>

          {/* Text overlay */}
          <div className="relative z-20 text-center lg:text-left text-white select-none">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold mb-3 sm:mb-4 leading-tight drop-shadow-lg">
              Get In Touch
            </h2>
            <p className="text-gray-300 max-w-sm mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg leading-relaxed">
              Questions, ideas, or collaboration? Send us a message and let's
              make it happen.
            </p>
          </div>

          {/* Corner accent elements */}
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border-t-2 border-r-2 border-amber-400/30"></div>
          <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border-b-2 border-l-2 border-amber-400/30"></div>
        </div>
      </section>
    </div>
  );
}
