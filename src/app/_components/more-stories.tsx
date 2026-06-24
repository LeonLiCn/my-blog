import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-3xl md:text-4xl font-semibold tracking-tighter">
        More stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-16 gap-y-12 md:gap-y-16 pb-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
