import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pizza } from "../Components/export";
import AOS from "aos";
import "aos/dist/aos.css";

function TopRated() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      id="pizza"
      className="h-fit w-full my-10 lg:px-20 lg:py-20 flex flex-col justify-center items-center gap-6"
    >
      <h1
        data-aos="zoom-in"
        className="text-5xl text-black font-bold text-center"
      >
        FAVORITOS
      </h1>
      <p data-aos="zoom-in" className="text-xl text-black text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, pariatur
        vero. Officia ullam facilis impedit tenetur? Alias, voluptates est!
      </p>

      <div data-aos="slide-up" className="lg:w-[90%] w-full">
        <Slider {...settings}>
          {pizza.map((item, index) => (
            <div
              key={index}
              id="product-box"
              className="bg-black p-8 flex flex-col justify-center items-center gap-4 rounded-lg"
            >
              <img
                src={item.image}
                alt="product image"
                className="rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
              <h1 className="text-white text-center text-2xl font-bold">
                {item.title}
              </h1>
              <h1 className="text-orange-600 font-bold text-3xl">
                {item.price}
              </h1>
              <p className="text-lg text-white text-center">{item.para}</p>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black">
                Compre agora
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TopRated;
