import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Medium Blog</title>
        <meta name="description" content="Medium Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
}
