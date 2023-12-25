import React, { useRef, useEffect } from "react";
// import addData from "../pages/api/addData";
import Cursor from "../components/cursor";

export default function Form() {
  function btnHandle(handler) {
    btn.current.disabled = handler;
  }

  // async function addData(namee, num, ag, gen, coursee) {
  //   const res = await fetch("/api/addData", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: namee,
  //       number: num,
  //       age: ag,
  //       gender: gen,
  //       course: coursee,
  //       lead: "landing",
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .catch((err) => console.log(err));

  //   return res;
  // }
  const name = useRef();
  const email = useRef();
  const university = useRef();
  const college = useRef();
  const num = useRef();
  const age = useRef();
  const gender = useRef();
  return (
    <div className="w-screen ">
    <Cursor/>
      <form class="max-w-xl h-screen my-40 mx-auto">
      <section className=" flex items-start justify-start h-[110vh] w-full ">
        <div className="h-screen w-[40vw] md:max-w-[500px]:-mt-20 md:max-w-[500px]:items-center md:sm:ml-0  ml-20 flex items-center flex-col justify-start gap-10 scale-95 mt-20 flex-wrap rounded-md ">
          <div className="grid w-full grid-cols-2">
          <div className="inputBox">
            <input
              className="text-bold"
              type="text"
              required
              ref={name}
              id="nem"
            />
            <span>Name</span>
          </div>
          <div className="inputBox">
            <input
              type="tel"
              className="text-bold"
              required
              maxLength="10"
              pattern="\d{10}"
              ref={num}
              id="num"
            />
            <span>Contact Number</span>
          </div>
          </div>
          <div className="w-full ">
          <div className="inputBox">
            <input
              className="text-bold"
              
              type="text"
              required
              ref={age}
              id="ag"
            />
            <span>Age</span>
          </div>
          </div>
          <div className="grid w-full grid-cols-2">
          <div className="inputBox">
            <input
              className="text-bold"
              type="text"
              required
              ref={gender}
              id="gen"
            />
            <span>Gender</span>
          </div>
          <div className="inputBox">
            <input
              className="text-bold"
              type="text"
              required
              ref={email}
              id="gen"
            />
            <span>Email</span>
          </div>
          </div>
          <div className="grid w-full grid-cols-2">
          <div className="inputBox">
            <input
              className="text-bold"
              type="text"
              required
              ref={university}
              id="gen"
            />
            <span>University</span>
          </div>
          <div className="inputBox">
            <input
              className="text-bold"
              type="text"
              required
              ref={college}
              id="gen"
            />
            <span>College</span>
          </div>
          </div>

          <div className="inputBox">
            <select
              className="text-black text-[1.1rem] h-10 bg-gray-300 px-2"
              name="course"
              id="course"
              required
            >
              <option value=" None Selected ">Select a Course</option>
              <option value="Cricket">Cricket</option>
              <option value="Football">Football</option>
              <option value="Badminton">Badminton</option>
              <option value="Roadies">Roadies</option>
              <option value="BGMI">
                BGMI
              </option>
              <option value="Valorant">
                Valorant
              </option>
            </select>
          </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault;
            if (
              firstName.current.value &&
              lastName.current.value &&
              email.current.value &&
              university.current.value &&
              college.current.value &&
              phone.current.value
            ) {
              addData(
                firstName.current.value,
                lastName.current.value,
                email.current.value,
                university.current.value,
                college.current.value,
                phone.current.value,
                document.getElementById("course").value 
              );
            }
            firstName.current.value = "";
            lastName.current.value = "";
            email.current.value = "";
            university.current.value = "";
            college.current.value = "";
            phone.current.value = "";
            document.getElementById("course").value = " None Selected ";
          }}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        </div>
        </section>
      </form>
      
    </div>
   
  );
}
