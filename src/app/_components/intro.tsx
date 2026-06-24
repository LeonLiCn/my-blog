import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constants";

export function Intro() {
  return (
    <section className="mt-12 mb-12 md:mb-14">
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-none mb-3">
        {SITE_TITLE}
      </h1>
      <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
        {SITE_DESCRIPTION}
      </p>
    </section>
  );
}
