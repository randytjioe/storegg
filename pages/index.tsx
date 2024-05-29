import { useEffect } from "react";
import AOS from "aos";
import Navbar from "@/components/organisms/Navbar";
import MainBanner from "@/components/organisms/MainBanner";
import TransactionStep from "@/components/organisms/TransactionStep";
import FeaturedGame from "@/components/organisms/FeaturedGame";
import Reached from "@/components/organisms/Reached";
import Story from "@/components/organisms/Story";
import Footer from "@/components/organisms/Footer";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Head>
        <title>StoreGG - Get a New Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta
          name="og:title"
          content="StoreGG - Get a New Experience in Gaming"
        />
        <meta
          name="og:description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta name="og:image" content="https://localhost:4000" />
        <meta name="og:url" content="https://localhost:4000" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
