import React from "react";

export default function About() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen justify-center gap-10 items-center ">
        <h1 className="text-4xl font-bold md:text-6xl sm:text-5xl  max-w-l uppercase text-center ">
          About Us
        </h1>

        <p className="text-justify about text-[25px] px-10 max-w-7xl overflow-x-hidden overflow-y-scroll  ">
          Welcome to Tech Kaushalya 2024, where the thrill of competition meets
          the pulse of technology in the vibrant setting of Gujarat University!
          As one of the most anticipated college tech fests, Tech Kaushalya is
          your arena to showcase your skills, compete with the best, and embrace
          the spirit of intense rivalry. <br />
          Tech Kaushalya 2024 is not just a fest; it's a battleground for
          tech warriors seeking victory, recognition, and the sweet taste of
          triumph. Whether you're a seasoned competitor, a coding prodigy, or
          simply someone with a competitive spirit, we invite you to join us in
          this exhilarating journey. 
        </p>
      </div>
    </>
  );
}
