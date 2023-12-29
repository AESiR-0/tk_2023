import React from "react";

export default function About() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen justify-center gap-10 items-center ">
        <h1 className="text-4xl font-bold md:text-6xl sm:text-5xl  max-w-l uppercase text-center ">
          About Us
        </h1>

        <p className="text-justify about text-[25px] px-10 max-w-7xl overflow-scroll  ">
          TK stands for Tech Kaushaliya, and it represents an inclusive event
          where individuals can participate by registering for a range of
          activities. Tech Kaushaliya (TK) is an exciting event organized by
          students of Rollwala Computer Center. It's a combination of tech and
          non-tech events that provide a unique platform for participants to
          showcase their skills and interests. <br />
          Tech Kaushalya 2024 is not just a fest; it's a battleground for tech
          warriors seeking victory, recognition, and the sweet taste of triumph.
          Whether you're a seasoned competitor, a coding prodigy, or simply
          someone with a competitive spirit, we invite you to join us in this
          exhilarating journey.
          <br />
          Gear up for an electrifying experience of competitiveness, skill
          mastery, and unbridled excitement at Tech Kaushalya 2024. Let
          the games begin!
        </p>
      </div>
    </>
  );
}
