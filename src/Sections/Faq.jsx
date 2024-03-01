import { useEffect } from "react";
import faqimg1 from "../assets/images/faq1.jpg";
import faqimg2 from "../assets/images/faq2.jpg";
import faqimg3 from "../assets/images/faq3.jpg";
import faqimg4 from "../assets/images/faq4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Accordion } from "flowbite-react";

function Faq() {
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
      id="faq"
      className="w-full lg:px-20 px-10 lg:py-20 py-10 grid lg:grid-cols-2 grid-cols-1 justify-center items-start gap-14"
    >
      <div
        id="left"
        className="flex flex-col justify-center items-center gap-12"
      >
        <h1
          data-aos="zoom-in"
          className="text-6xl text-black font-bold text-center"
        >
          Perguntas frequentes
        </h1>
        <div data-aos="slide-up" className="w-full">
          <Accordion className="flex flex-col justify-center items-center gap-2">
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">
                Qual horário de funcionamento?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem, earum.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">
                Qual horário de funcionamento?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem, earum.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">
                Qual horário de funcionamento?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem, earum.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">
                Qual horário de funcionamento?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem, earum.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">
                Qual horário de funcionamento?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem, earum.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">
                Qual horário de funcionamento?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem, earum.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="border-none text-black text-lg">
                Qual horário de funcionamento?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem, earum.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <button
          data-aos="flip-up"
          className="bg-orange-500 text-lg text-white px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white"
        >
          Fale conosco
        </button>
      </div>
      <div
        id="image box"
        className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center items-center gap-4"
      >
        <img
          data-aos="zoom-in"
          src={faqimg1}
          alt=""
          className="w-[400px] h-[400px] rounded-xl"
        />
        <img
          data-aos="zoom-in"
          src={faqimg2}
          alt=""
          className="w-[400px] h-[400px] rounded-xl"
        />
        <img
          data-aos="zoom-in"
          src={faqimg3}
          alt=""
          className="w-[400px] h-[400px] rounded-xl"
        />
        <img
          data-aos="zoom-in"
          src={faqimg4}
          alt=""
          className="w-[400px] h-[400px] rounded-xl"
        />
      </div>
    </section>
  );
}

export default Faq;
