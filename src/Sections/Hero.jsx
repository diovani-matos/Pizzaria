import { useEffect } from "react";
import Banner4 from "../assets/images/banner4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section
      id="hero"
      className="w-full lg:px-20 px-10 lg:py-20 py-10 h-fit bg-cover bg-center flex flex-col justify-center items-start gap-8"
      style={{ backgroundImage: `url(${Banner4})` }}
    >
      <h1 data-aos="zoom-in" className="text-6xl text-white font-bold">
        A vida é uma combinação <br /> de Pizza & Mágica
      </h1>
      <p data-aos="zoom-in" className="text-xl text-white font-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        <br /> Perspiciatis illo minus assumenda maiores dolorum. Facere est
        <br /> mollitia tempora expedita? Nulla repudiandae perspiciatis
        <br />
        laboriosam accusantium vel accusamus quisquam. Suscipit!
      </p>
      <button
        data-aos="flip-up"
        className="bg-orange-500 text-lg px-8 py-4 rounded-full font-semibold hover:bg-white hover: text-black"
      >
        Compre agora!
      </button>
    </section>
  );
}

export default Hero;
