"use client";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 mt-14 md:mt-20 mb-14">
        <div
          className="bg-white rounded-2xl border border-[#D9E2EC] shadow-sm px-6 py-10 md:px-10 md:py-12"
          data-aos="fade-up"
          data-aos-offset="100"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D]">
              تواصل معنا
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="bg-[#F5F7FA] rounded-2xl p-6 text-center"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-white flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-[#FF7A00]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B3C5D] mb-2">
                المهندس محمد حافظ
              </h3>
              <p className="text-[#1F1F1F]">01283087083</p>
            </div>

            <div
              className="bg-[#F5F7FA] rounded-2xl p-6 text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-white flex items-center justify-center mb-4">
                <MessageCircle className="w-7 h-7 text-[#FF7A00]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B3C5D] mb-2">
                واتساب / فون
              </h3>
              <p className="text-[#1F1F1F]">01283087083</p>
            </div>

            <div
              className="bg-[#F5F7FA] rounded-2xl p-6 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-white flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-[#FF7A00]" />
              </div>
              <h3 className="text-lg font-bold text-[#0B3C5D] mb-2">
                الموقع
              </h3>
              <p className="text-[#1F1F1F]">مصر</p>
            </div>
          </div>

          <div
            className="flex justify-center mt-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="https://wa.me/201283087083"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#FF7A00] hover:bg-[#e96f00] text-white px-8 py-6 rounded-full shadow-sm">
                راسلنا على واتساب
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}