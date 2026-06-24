import Link from "next/link";

const Header = () => {
  return (
    <div className="mb-10 mt-8">
      <Link 
        href="/" 
        className="text-sm font-medium tracking-widest uppercase text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
      >
        ← Back to all posts
      </Link>
    </div>
  );
};

export default Header;
