import React, { useState } from "react";
import { MdClose } from "react-icons/md";


export default function NonCard(props) {
  const [modal, setModal] = useState(false);
  function toggleModal() {
    setModal(!modal);
  }
  return (
    <div className="main-wrapper py-10">
      <div className="   ">
        <h4
          className="w-fit"
          href="https://www.mythrillfiction.com/the-dark-rider"
          alt="Mythrill"
          target="_blank"
          onClick={toggleModal}
        >
          <div className="card">
            <div className="wrapper">
              <img
                src={props.img1}
                className="cover-image"
              />
            </div>
            <img
              src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
              className="title"
            />
            <img
              src={props.img2}
              style={{ marginTop: "60px" }}
              className="character"
            />
          </div>
        </h4>
        {modal && (
          <div className="h-screen   modal ">
            <div className="absolute -mt-10 h-80 w-80">
                <MdClose
                  onClick={toggleModal}
                  className="h-10 w-10 top-20 relative z-0   text-white"
                />

              <div className="flex gap-3 flex-col jusitfy-center align-center">
                <img
                  src={props.img1}
                  className="scale-[0.7] -mb-36"
                  alt=""
                />
                <h1 className="text-white text-4xl font-bold text-center mt-20">
                  {props.title}
                </h1>
                <p className="text-white font-semibold text-center max-w-4xl">
                  {props.desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
