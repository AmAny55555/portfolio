"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="w-full">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 mt-10 md:mt-14 lg:mt-16">
        <div className="relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">

          <Image
            src="/1.jpg"
            alt="hero"
            fill
            className="object-cover opacity-30"
          />

     
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#1DA1F2]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#FF7A00]/10 blur-3xl pointer-events-none" />

     
          <div className="relative px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20 text-center lg:text-right">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0B3C5D] leading-tight">
              المستقبل تك
              <br />
              للخدمات التكنولوجية
            </h1>

            <p className="mt-5 max-w-2xl text-base md:text-lg leading-8 text-[#1F1F1F] mx-auto lg:mx-0">
              حلول متكاملة في التكنولوجيا والتسويق الرقمي وصيانة الأجهزة
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="rounded-full bg-[#FF7A00] px-7 py-6 text-base text-white hover:bg-[#e96f00]">
                عرض خدماتنا
              </Button>

              <Button className="rounded-full bg-[#FF7A00] px-7 py-6 text-base text-white hover:bg-[#e96f00]">
                تواصل معنا
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}