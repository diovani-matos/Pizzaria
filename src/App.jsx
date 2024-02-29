import React from "react"
import Header from "./Sections/Header"
import Hero from "./Sections/Hero"
import About from "./Sections/About"
import TopRated from "./Sections/TopRated"
import BestSellers from "./Sections/BestSellers"
import Faq from "./Sections/Faq"
import Contact from "./Sections/Contact"
import Footer from "./Sections/Footer"

export default function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <TopRated/>
      <BestSellers/>
      <Faq/>
      <Contact/>
      <Footer/>
    </>
  )
}