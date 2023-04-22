import React from "react";
import { client, urlFor } from "@/sanity";
import Header from "@/components/header/Header";
import { Post } from "@/typings";
import { GetStaticProps } from "next";
import Image from "next/image";
const Post = ({ post: Post }: { post: Post }) => {
  console.log(Post);
  return (
    <main>
      <Header />
      <Image
        className="object-cover w-full h-96"
        src={urlFor(Post.mainImage).url()!}
        alt={Post.title}
        width={1000}
        height={500}
      />
      <article
        className="
        max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center
        "
      >
        <h1 className="text-4xl font-bold  my-4 text-gray-800 ">
          {Post.title}
        </h1>
        <h2 className="text-xl font-light">
          <p className="text-gray-800  my-4">{Post.description}</p>
        </h2>
        <div className="flex items-center justify-center">
          <div className="flex items-center border-2 rounded-md p-1">
            <Image
              className="rounded-full"
              src={urlFor(Post.author.image).url()!}
              alt={Post.author.name}
              width={50}
              height={50}
            />
            <p className="text-gray-800 font-extralight ml-2">
              Post Author:{" "}
              <span className="text-green-500 font-semibold">
                {Post.author.name}
              </span>
              <br />
              Published at: {new Date(Post._createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <div
          className="
        max-w-2xl mx-auto my-8
        
        "
        >
          <div>
            {Post.body.map((block: any) => {
              if (block._type === "image") {
                return (
                  <div key={block._key}>
                    <Image
                      src={urlFor(block.asset).url()!}
                      alt={block.alt}
                      width={300}
                      height={300}
                    />
                    <p className="text-gray-800 font-extralight text-center">
                      {block.caption}
                    </p>
                  </div>
                );
              }
              return (
                <div key={block._key}>
                  {block.children.map((child: any) => {
                    if (child._type === "span") {
                      return (
                        <span
                          key={child._key}
                          className={child.marks.map((mark: any) => mark)}
                        >
                          {child.text}
                        </span>
                      );
                    }
                    return <p key={child._key}>{child.text}</p>;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </article>
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
        _createdAt,
        body,
        'comments': *[_type == "comment" && post._ref == ^._id && approved == true]
      }`;
  const post = await client.fetch(query, { slug });
  if (!post)
    return {
      notFound: true,
    };

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
