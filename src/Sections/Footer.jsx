// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaArrowUp,
  
} from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <><section className="w-full h-fit lg:px-20 px-10 lg:py-10 py-10 flex flex-col justify-center items-center gap-6 bg-black">
          <h1 className="text-white font-bold text-5xl py-4">
              Napoli <span className="text-orange-500 italic">Pizza</span>
          </h1>
          <p className="text-xl text-slate-100 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              molestiae.
          </p>
          <div id="social-icons" className="flex justify-center items-center gap-4">
              <div
                  id="icon-box"
                  className="p-3 rounded-full bg-orange-500 hover:bg-white hover:text-black text-white cursor-pointer transform hover:scale-105 transition-transform duration-300"
              >
                  <FaFacebookF className="w-[25px] h-[25px]" />
              </div>
              <div
                  id="icon-box"
                  className="p-3 rounded-full bg-orange-500 hover:bg-white hover:text-black text-white cursor-pointer transform hover:scale-105 transition-transform duration-300"
              >
                  <FaInstagram className="w-[25px] h-[25px]" />
              </div>
              <div
                  id="icon-box"
                  className="p-3 rounded-full bg-orange-500 hover:bg-white hover:text-black text-white cursor-pointer transform hover:scale-105 transition-transform duration-300"
              >
                  <FaYoutube className="w-[25px] h-[25px]" />
              </div>
              <div
                  id="icon-box"
                  className="p-3 rounded-full bg-orange-500 hover:bg-white hover:text-black text-white cursor-pointer transform hover:scale-105 transition-transform duration-300"
              >
                  <FaWhatsapp className="w-[25px] h-[25px]" />
              </div>
          </div>
      </section>
      <div id="icon-box" className="bg-orange-500 text-black p-3 rounded-full hover:bg-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6">
        <Link to="hero" spy={true} offset={-100} smooth={true}> <FaArrowUp className="w-[25px] h-[25px]"/></Link>

        </div>
        </>
  );
}

export default Footer;
