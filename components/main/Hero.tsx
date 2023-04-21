import Image from "next/image";
import MLetter from "@/public/assets/M-Logo.png";
const Hero = () => {
  return (
    <div className="flex justify-between items-center h-[400px] p-12 max-w-7xl mx-auto bg-yellow-400">
      <div>
        <h1 className="text-2xl md:text-6xl max-w-xl font-semibold mb-5">
          <span className="underline decoration-black decoration-4">Medium</span> is a place to write,
          read and connect
        </h1>
        <h2>
          It&apos;s easy and free to post your thinking on any topic and connect
          with millions of readers.
        </h2>
      </div>
      <div
      className="
      hidden md:inline-flex h-64 lg:h-full  "
      >
        <Image
          className="cursor-pointer"
          src={MLetter}
          width={400}
          height={400}
          alt="medium m letter"
        />
      </div>
    </div>
  );
};

export default Hero;
