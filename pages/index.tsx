import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import MenuScroll from "@/components/MenuScroll";
import Backgroundimage from "@/components/Backgroundimage";
import Preference from "@/components/Preference";
import Footer from "@/components/Footer";
import TestimonialSection from "@/components/TestimonialSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MealFlow - Healthy Meal Delivery</title>
        <meta name="description" content="Healthy and delicious meals delivered to your doorstep." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={`${inter.className} min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white`}>
        <Navbar />

        <div className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 top-80 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />

          <MenuScroll />
          <Backgroundimage />
          <Preference />
          <TestimonialSection />
        </div>

        <Footer />
      </main>
    </>
  );
}