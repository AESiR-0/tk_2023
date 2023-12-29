"use client";
import Nav from "@/components/nav";
import Meet from "@/components/meet";
import About from "@/components/about";
import Cursor from "@/components/cursor";
import Glimpses from "@/components/glimpses";
import Hero from "@/components/hero";
import NonCard from "@/components/cards";
import Head from "next/head";
import Footer from "@/components/footer";

export default function Home() {

  return (
    <div className="whole" id="page-wrap">
    <Head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
    
  </Head>


    <div className="home">
      <Cursor />
      <section className="h-screen w-screen">
        <Nav />

        <Hero />
      </section>
      <section id="about" className="h-screen w-screen">
        <About />
      </section>
      <section id="meet" >
        <Meet />
      </section>
      {/* <section id="events" className="h-screen w-screen event-text lg:mb-48">
        <div className="text-5xl text-center mb-10 text-white font-bold">
          Non Tech Events
        </div>
        <div className="h-screen w-screen px-40 grid grid-cols-3 gap-20 grid-flow-row">
          <NonCard
            title="Cricket"
            img1="./cricket-ball-hitting-stump.jpg"
            img2="./bat_ball.png"
            desc="A cricket tournament where each team will have 5 players, we
                  will follow basic rules of cricket. The registration fee is Rs. 500 per
                  team."
          />
          <NonCard
            title="BGMI"
            img1="./BGMI-Imag.jpg"
            img2="./bgmi logo.png"
            desc="A Battle Royale mobile game tournament where each team will have 4 players, we will follow basic rules of BGMI. The registration fee is Rs. 400 per team."
          />
          <NonCard
            title="Football"
            img1="./soccer.jpg"
            img2="./football.png"
            desc="A football tournament where each team will have 5 players, we
          will follow basic rules of football. The registration fee is Rs. 500 per
          team."
          />
          <NonCard
            title="Valorant"
            img1="./valo vertical.jpg"
            img2="./valo logo.png"
            desc="A Valorant tournament where each team will have 5 players, we
          will follow basic rules of Valorant. The registration fee is Rs. 500 per
          team."
          />
          <NonCard
            title="Cinematography"
            img1="./clapper.jpg"
            img2="./camera.png"
            desc="A Cinematography competition where you will be instructed and mentored before the event day. You have to document event the best way poassible. The Top 3 best documentation will be awarded. Bringing a camera (No digital Cameras or phones allowed) is compulsory. The registration fee is Rs. 250."
          />
        </div>
      </section>
      <section className="h-screen event-text  w-screen ">
        <div className="text-4xl  font-semibold flex justify-center items-center mb-20">
          Tech Events
        </div>
        <div className="h-screen  w-screen px-40 grid grid-cols-3 gap-20 grid-flow-row">
          <NonCard
            title="Cipher"
            img1="./cipher.jpg"
            img2="./cipher.png"
            desc="An event where you will have to apply ciphering and deciphering using different encryption and decryption techniques. Registration fee will be Rs. 100."
          />
          <NonCard
            title="Web Jam"
            img1="./webjam.jpg"
            img2="./webjam.png"
            desc="An event where you will have to solve a set of problems using your coding skills. Registration fee will be Rs. 100."
          />
          <NonCard
            title="Code Relay"
            img1="./coderelay.jpg"
            img2="./coderelay.png"
            desc="An event where you will have to solve a set of problems using your coding skills with a partner in a given time where you will do the given work like a relay race. Registration fee will be Rs. 200."
          />
          <NonCard
            title="Tech debate"
            img1="./techdebate.jpg"
            img2="./techdebate.png"
            desc="An event where you will have to debate about given hot topics going on in the circuit. Registration fee will be Rs. 100."
          />
        </div>
      </section> */}
      <section className="h-screen mt-20 w-screen">
        <Glimpses />
      </section>

      <section id="events" className="h-screen flex items-center justify-center w-screen">
      <span className="text-5xl text-center  text-white font-bold">
          Events Coming Soon...
        </span>
      </section>

      <section className="bg-white" id="footer">
        <Footer />
      </section>
    </div>
    </div>
  );
}
