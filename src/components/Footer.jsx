export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} DevAgency. All rights reserved.
        </p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
