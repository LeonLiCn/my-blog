import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <section className="mb-16">
      <div className="mb-6">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-12 md:gap-x-8">
        <div className="md:col-span-7">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tighter leading-tight mb-3">
            <Link href={`/posts/${slug}`} className="hover:underline decoration-1 underline-offset-4">
              {title}
            </Link>
          </h3>
          <div className="text-sm text-slate-500 dark:text-slate-400 mb-3">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div className="md:col-span-5">
          <p className="text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
            {excerpt}
          </p>
        </div>
      </div>
    </section>
  );
}
