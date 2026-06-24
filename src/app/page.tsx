import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];

  return (
    <main>
      <Container>
        <Intro />
        {heroPost ? (
          <>
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
            {allPosts.length > 1 && <MoreStories posts={allPosts.slice(1)} />}
          </>
        ) : (
          <p className="text-slate-500 dark:text-slate-400">
            No posts yet.
          </p>
        )}
      </Container>
    </main>
  );
}
