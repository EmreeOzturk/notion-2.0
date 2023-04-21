import Image from "next/image";
import Link from "next/link";
import { Post } from "@/typings";
import { urlFor } from "@/sanity";
const PostCard = ({ post: post }: { post: Post }) => {
  return (
    <Link
      className="flex flex-col items-center justify-center max-h-[350px] m-4 bg-white rounded-md shadow-lg overflow-hidden"
      href={"/post/" + post.slug.current}
    >
      {post.mainImage && (
        <div className="hover:scale-105 relative h-48 w-96 transition-all duration-300 ease-in-out ">
          <Image
          
            src={urlFor(post.mainImage).url()!}
            alt={post.title}
            fill
          />
        </div>
      )}
      <div className="bg-gray-300 flex items-center justify-center w-full h-full p-6">
        <div className="flex flex-col items-start justify-start w-full h-full ">
          <h1 className="text-2xl font-semibold text-center">{post.title}</h1>
          <p className="text-center text-sm">{post.description}</p>
        </div>
        <div
         className="rounded-full border overflow-hidden w-[70px] h-[70px] relative">
          <Image
            src={urlFor(post.author.image).url()!}
            alt={post.author.name}
            fill
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
