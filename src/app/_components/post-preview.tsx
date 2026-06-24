import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <div>
      <div className="mb-4">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-2xl font-semibold tracking-tighter mb-2 leading-tight">
        <Link href={`/posts/${slug}`} className="hover:underline decoration-1 underline-offset-2">
          {title}
        </Link>
      </h3>
      <div className="text-sm text-slate-500 dark:text-slate-400 mb-2.5">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
        {excerpt}
      </p>
    </div>
  );
}
