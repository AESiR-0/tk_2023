"use client";
import Nav from "@/components/nav";
import Meet from "@/components/meet";
import About from "@/components/about";
import gsap from "gsap";
import Cursor from "@/components/cursor";
import Glimpses from "@/components/glimpses";
import Hero from "@/components/hero";
import NonCard from "@/components/cards";
import Tech from "@/components/techcard";

export default function Home() {
  return (
    <>
  
      <Cursor />
      <section className="h-screen w-screen">
      <Nav />
      <Hero />
      </section>
      <section className="h-screen w-screen">
      <About />
      </section>
      <section className="h-screen w-screen">
      <Meet />
      </section>
      <section className="h-screen w-screen">
      <NonCard />
      </section>
      <section className="h-screen w-screen">
      <Tech />
      </section>
      {/* <Glimpses/> */}
    </>
  );
}
