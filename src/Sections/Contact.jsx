import { useEffect } from "react";
import contact1 from "../assets/images/contact1.jpg";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
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
      id="contact"
      className="w-full lg:px-20 px-10 lg:py-20 py-10 h-fit flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${contact1})` }}
    >
      <div className="lg:w-[80%] w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-10">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="bg-white p-8 rounded-xl flex flex-col justify-center items-center gap-4 border-l-[10px] border-orange-500"
        >
          <div
            id="icon-box"
            className="p-5 rounded-full bg-black hover:bg-orange-500 text-white cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <FaMapLocationDot className="w-[35px] h-[35px]" />
          </div>
          <h1 className="text-2xl text-black font-bold">Venha conhecer</h1>
          <p className="text-center text-lg text-slate-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
            fuga.
          </p>
          <button className="bg-orange-500 hover:bg-black text-white rounded-full px-8 py-3 font-bold">VER MAPA</button>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="bg-white p-8 rounded-xl flex flex-col justify-center items-center gap-4 border-l-[10px] border-orange-500"
        >
          <div
            id="icon-box"
            className="p-5 rounded-full bg-black hover:bg-orange-500 text-white cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <MdEmail className="w-[35px] h-[35px]" />
          </div>
          <h1 className="text-2xl text-black font-bold">NOSSO EMAIL</h1>
          <p className="text-center text-lg text-slate-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
            fuga.
          </p>
          <button className="bg-orange-500 hover:bg-black text-white rounded-full px-8 py-3 font-bold">contato@napolipizza.com</button>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="bg-white p-8 rounded-xl flex flex-col justify-center items-center gap-4 border-l-[10px] border-orange-500"
        >
          <div
            id="icon-box"
            className="p-5 rounded-full bg-black hover:bg-orange-500 text-white cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <FaPhoneAlt className="w-[35px] h-[35px]" />
          </div>
          <h1 className="text-2xl text-black font-bold">NOSSO TELEFONE</h1>
          <p className="text-center text-lg text-slate-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
            fuga.
          </p>
          <button className="bg-orange-500 hover:bg-black text-white rounded-full px-8 py-3 font-bold">99 99000-0000</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
