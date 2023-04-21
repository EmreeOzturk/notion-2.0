import Head from "next/head";
import Header from "@/components/header/Header";
import Hero from "@/components/main/Hero";
import { client } from "@/sanity";
import { Post } from "@/typings";
import PostCard from "@/components/main/posts/PostCard";

export default function Home({ posts: posts }: { posts: Post[] }) {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Medium Blog</title>
        <meta name="description" content="Medium Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      {/* posts */}
      <div className="flex items-center flex-wrap justify-center max-w-7xl mx-auto py-12">
        {posts.map((post) => (
            <PostCard key={post._id} post={post} />
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `
  *[_type == "post"]{
    _id,
    title,
    author-> {
      name,
      image
    },
    description,
    slug,
    mainImage
  }`;

  const posts = await client.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
