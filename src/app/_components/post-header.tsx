import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function PostHeader({ title, coverImage, date }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="mb-6 text-sm text-slate-500 dark:text-slate-400">
        <DateFormatter dateString={date} />
      </div>

      <div className="mb-9 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
}
