export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 md:py-8">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-600">
            © 2026 Pratik Chogale. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-slate-400">|</span>
            <a
              href="https://www.applysathi.com/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 transition-colors hover:text-blue-600"
            >
              ApplySathi
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="https://dermaplastcrm.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 transition-colors hover:text-blue-600"
            >
              DermaplastCRM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}