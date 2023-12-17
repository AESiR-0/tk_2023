'use client'
import Nav from "@/components/nav";
import Meet from "@/components/meet";
import About from "@/components/about";
import gsap from "gsap";
import Cursor from "@/components/cursor";
import Glimpses from "@/components/glimpses";

export default function Home() { 

  


  return (
    <>
   <Cursor/>
      <Nav />
      <section className="h-screen ">
        <div className="hero flex h-full -mt-10 justify-center items-center ">
          <img src="./text_logo.png" width={700} height={500} />
        </div>

      </section>
   
<About />
      <Meet />
      {/* <Glimpses/> */}
    </>
  );
}
