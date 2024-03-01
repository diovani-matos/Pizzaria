import { useEffect } from "react";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import about1 from "../assets/images/about1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <section
        id="about"
        className="w-full lg:px-20 px10 lg:py-20 py-10 h-fit grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10"
      >
        <div
          data-aos="zoom-in"
          className="lg:mx-0 md:mx-32 border-[2px] border-orange-500 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer "
        >
          <img
            src={icon1}
            alt=""
            className="w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-black text-base font-lg font-semibold text-center">
            SOBRE NÓS
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          className="lg:mx-0 md:mx-32 border-[2px] border-orange-500 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer "
        >
          <img
            src={icon2}
            alt=""
            className="w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-black text-base font-lg font-semibold text-center">
            VEGANO
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          className="lg:mx-0 md:mx-32 border-[2px] border-orange-500 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer "
        >
          <img
            src={icon3}
            alt=""
            className="w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-black text-base font-lg font-semibold text-center">
            PIZZA
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          className="lg:mx-0 md:mx-32 border-[2px] border-orange-500 p-14 flex flex-col justify-center items-center gap-6 rounded-xl hover:bg-orange-100 cursor-pointer "
        >
          <img
            src={icon4}
            alt=""
            className="w-[80px] h-[80px] transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <h1 className="text-black text-base font-lg font-semibold text-center">
            MASSAS
          </h1>
        </div>
      </section>
      <section className="w-full lg:px-20 px-10 lg:py-10 h-fit grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
        <div>
          <img
            data-aos="zoom-in"
            src={about1}
            alt="imagem sobre"
            className="lg:w-[800px] lg:h-[600px] rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h1
            data-aos="zoom-in"
            className="text-2xl text-black font-semibold text-center"
          >
            BEM VINDO
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-6xl text-black font-bold text-center"
          >
            Napoli Pizzas
          </h1>
          <p data-aos="zoom-in" className="text-xl text-slate-800 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            provident cum, at itaque quaerat sit impedit! Omnis hic neque error.
          </p>
          <button
            data-aos="flip-up"
            className="bg-orange-500 text-lg text-white px-8 py-4 rounded-full font-semi-bold hover:bg-black hover:text-white"
          >
            Compre agora
          </button>
        </div>
      </section>
    </>
  );
}

export default About;
