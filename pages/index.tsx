import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Medium Blog</title>
        <meta name="description" content="Medium Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
