import React from "react";
import { client, urlFor } from "@/sanity";
import Header from "@/components/header/Header";
import { Post } from "@/typings";
import { GetStaticProps } from "next";
const Post = () => {
  return (
    <main>
      <Header />
    </main>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `
*[_type == "post"]{
    _id,
    slug{
        current
    }
    }`;
  const posts = await client.fetch(query);
  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug.current },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { slug } = context?.params;
  const query = `
    *[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        author-> {
          name,
          image
        },
        description,
        slug,
        mainImage,
        body,
        'comments': *[_type == "comment" && post._ref == ^._id && approved == true]
      }`;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
};
