"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from "./_components/Portfolio";

import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Features from "./_components/features";
import Contact from "./_components/Contact";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div>
      <Hero />
      <Services />
        <Portfolio />
        <Features/>
        <Contact/>
    </div>
  );
}