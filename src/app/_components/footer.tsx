import Container from "@/app/_components/container";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800">
      <Container>
        <div className="py-10 flex flex-col md:flex-row md:items-center gap-y-2 md:justify-between text-sm text-slate-500 dark:text-slate-400">
          <div>
            © {new Date().getFullYear()} {SITE_NAME}
          </div>
          <div className="flex items-center gap-x-4">
            <a href="/" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Latest posts
            </a>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <span>Built with Next.js</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
