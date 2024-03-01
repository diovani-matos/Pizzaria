import { useEffect } from "react";
import { pizza } from "../Components/export";
import AOS from "aos";
import "aos/dist/aos.css";

function BestSellers() {
  useEffect(() => {
    AOS.init({
      delay: 100,
    });
  }, []);

  return (
    <section className="w-full lg:px-20 px-10 lg:py-20 h-fit flex flex-col justify-center items-center gap-14 bg-black my-14">
      <h1
        data-aos="zoom-in"
        className="text-white text-6xl font-bold text-center py-5"
      >
        Nossos Mais Vendidos
      </h1>
      <div
        data-aos="slide-up"
        className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-6 md:my-4"
      >
        {pizza.map((item, index) => (
          <div
            key={index}
            className="bg-white flex flex-col justify-center items-center gap-4 rounded-lg p-8"
          >
            <img
              src={item.image}
              alt="pizza image"
              className="rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <h1 className="text-black text-center text-2xl font-bold ">
              {item.title}
            </h1>
            <h1 className="text-orange-600 font-bold text-3xl">{item.price}</h1>
            <p className="text-lg text-slate-800 text-center">{item.para}</p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white">
              Compre agora
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSellers;
